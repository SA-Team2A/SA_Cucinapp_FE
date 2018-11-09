using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;

public class CreateCuisine : MonoBehaviour {

	private API_Requests request;
	
	private string apiURL;	
	
	public InputField cuisineInput;
	
	public GameObject controller;
	
	// Use this for initialization
	void Start () {
		apiURL = PlayerPrefs.GetString("API_URL");
		request = controller.GetComponent<API_Requests>();
	}
	
	public void createCuisine()
	{
		string jsonData = "{\"query\": \"mutation {createCuisine(input:{name:" + '\u005C' + '\u0022' + cuisineInput.text + '\u005C' + '\u0022' + "})}\"}";
		API_Requests cdCuisine = new API_Requests(this, request.PostRequest(apiURL, jsonData));
		controller.GetComponent<MenuController>().showCreate();
	}
}
