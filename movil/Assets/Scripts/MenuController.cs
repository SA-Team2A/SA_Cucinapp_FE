using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class MenuController : MonoBehaviour {
	
	public GameObject initialScreen, footer, mainMenu,
										createMenu;
	
	// Use this for initialization
	void Start () {
		initialScreen.SetActive(true);
		footer.SetActive(false);
		mainMenu.SetActive(false);
		createMenu.SetActive(false);
	}
	
	public void showMainMenu()
	{
		mainMenu.SetActive(true);
		footer.SetActive(true);
		initialScreen.SetActive(false);
	}
	
	public void showCreate()
	{
		createMenu.SetActive(true);
		mainMenu.SetActive(false);
	}
}
