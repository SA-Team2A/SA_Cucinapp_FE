using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SignUp : MonoBehaviour {

	public GameObject popUp;

	public MenuController controller;
	
	public InputField userInput, emailInput, passwordInput, confirmInput;
	
	void Start()
	{
		popUp.SetActive(false);
	}
	
	public void saveUser()
	{
		if(passwordInput.text != confirmInput.text)
		{
			popUp.SetActive(true);
		}
		else
		{
			PlayerPrefs.SetString("User_Username", userInput.text);
			PlayerPrefs.SetString("User_Email", emailInput.text);
			PlayerPrefs.SetString("User_Password", passwordInput.text);
			PlayerPrefs.SetInt("LoggedIn", 1);
			controller.showMainMenu();
			
			userInput.text = "";
			emailInput.text = "";
			passwordInput.text = "";
			confirmInput.text = "";
			//string jsonData = "{\"query\": \"mutation {createUser(input:{username:" + '\u005C' + '\u0022' + userInput.text.text + '\u005C' + '\u0022' + "})}\"}";
		}
	}
}
