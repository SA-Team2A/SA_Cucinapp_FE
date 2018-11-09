using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LogIn : MonoBehaviour {

	public InputField emailInput, passwordInput;

	// Use this for initialization
	void Start () {
		
	}
	
	public void logIn()
	{
		PlayerPrefs.SetInt("LoggedIn", 1);
	}
}
