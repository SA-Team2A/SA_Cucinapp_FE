using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;

public class API_Call : MonoBehaviour {

	public string apiURL;
	public string jsonData;
	
	public InputField ipInput;
	
	public Text infoText;
	
	public GameObject continueButton;
	
	private List<string> dropOptions = new List<string>();
	
	public CuisinesData cuisineInfo;
	
	// Use this for initialization
	void Start () {
		continueButton.SetActive(false);
		cuisineInfo = new CuisinesData();
		jsonData = "{\"query\": \"{getCuisines{id name}}\"}";
		
		//cuisineDropdown.ClearOptions();
	}
	
	public void GetInfo()
	{
		apiURL = "http://" + ipInput.text;
		PlayerPrefs.SetString("API_URL", apiURL);
		StartCoroutine(PostRequest(apiURL, jsonData));
	}
	
	public void SetText(string data)
	{
		cuisineInfo = JsonUtility.FromJson<CuisinesData>(data);
		Debug.Log (cuisineInfo.getCuisines.Count);
		
		foreach (CuisineObject cuisine in cuisineInfo.getCuisines)
		{
			dropOptions.Add(cuisine.name);
		}
		
		//cuisineDropdown.AddOptions(dropOptions);
	}
	
	IEnumerator PostRequest(string url, string json)
	{
		var uwr = new UnityWebRequest(url, "POST");
		byte[] jsonToSend = new System.Text.UTF8Encoding().GetBytes(json);
		uwr.uploadHandler = (UploadHandler)new UploadHandlerRaw(jsonToSend);
		uwr.downloadHandler = (DownloadHandler)new DownloadHandlerBuffer();
		uwr.SetRequestHeader("Content-Type", "application/json");

		//Send the request then wait here until it returns
		infoText.text = "Estado API Gateway: Buscando";
		yield return uwr.SendWebRequest();

		if (uwr.isNetworkError)
		{
			infoText.text = "Error While Sending: " + uwr.error;
			Debug.Log("Error While Sending: " + uwr.error);
		}
		else
		{
			var data = uwr.downloadHandler.text;
			infoText.text = "Estado API Gateway: Conectado";
			string fixedData = data.Remove(data.Length-1,1);
			fixedData = fixedData.Remove(0, 8);
			SetText(fixedData);
			continueButton.SetActive(true);
		}
	}
}