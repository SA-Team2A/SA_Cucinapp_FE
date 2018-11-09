using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class MenuController : MonoBehaviour {
	
	public GameObject footer, initialScreen, mainMenu, login,
										signUp, profile,
										createMenu, createCuisine, createDiet;
	
	// Use this for initialization
	void Start () {
		deactivateAll();
		initialScreen.SetActive(true);
		PlayerPrefs.DeleteAll();
	}
	
	public void showMainMenu()
	{
		deactivateAll();
		mainMenu.SetActive(true);
	}
	
	public void profileButton()
	{
		if(PlayerPrefs.GetInt("LoggedIn") == 1)
		{
			showProfile();
		}
		else
		{
			showLogin();
		}
	}
	
	private void showProfile()
	{
		deactivateAll();
		profile.SetActive(true);
	}
	
	public void showSignup()
	{
		deactivateAll();
		signUp.SetActive(true);
	}
	
	private void showLogin()
	{
		deactivateAll();
		login.SetActive(true);
	}
	
	public void showCreate()
	{
		deactivateAll();
		createMenu.SetActive(true);
		createMenu.GetComponent<CreateMenu>().buttonPress();
	}
	
	public void showCreateCuisine()
	{
		deactivateAll();
		createCuisine.SetActive(true);
	}
	
	public void showCreateDiet()
	{
		deactivateAll();
		createDiet.SetActive(true);
	}
	
	private void deactivateAll()
	{
		footer.SetActive(true);
		
		initialScreen.SetActive(false);
		mainMenu.SetActive(false);
		login.SetActive(false);
		signUp.SetActive(false);
		profile.SetActive(false);
		createMenu.SetActive(false);
		createCuisine.SetActive(false);
		createDiet.SetActive(false);
	}
}
