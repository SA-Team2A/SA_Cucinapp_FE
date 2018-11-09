using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class MainMenuVerify : MonoBehaviour {

	public GameObject infoText;

	// Use this for initialization
	void Start () {
		infoText.SetActive(true);
	}
	
	void Update ()
	{
		int loggedIn = PlayerPrefs.GetInt("LoggedIn");
		
		if(loggedIn == 1)
		{
			infoText.SetActive(false);
		}
	}
}
