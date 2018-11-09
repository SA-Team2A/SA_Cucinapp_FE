using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;

public class CreateDiet : MonoBehaviour {

	private API_Requests request;
	
	private string apiURL;	
	
	public InputField dietInput;
	
	public GameObject controller;
	
	// Use this for initialization
	void Start () {
		apiURL = PlayerPrefs.GetString("API_URL");
		request = controller.GetComponent<API_Requests>();
	}
	
	public void createDiet()
	{
		string jsonData = "{\"query\": \"mutation {createDiet(input:{name:" + '\u005C' + '\u0022' + dietInput.text + '\u005C' + '\u0022' + "})}\"}";
		API_Requests cdDiet = new API_Requests(this, request.PostRequest(apiURL, jsonData));
		controller.GetComponent<MenuController>().showCreate();
	}
}
