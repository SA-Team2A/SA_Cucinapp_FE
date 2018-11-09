using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;

public class CreateMenu : MonoBehaviour {

	private List<string> jsonRequests = new List<string>();
	
	private List<string> dietOptions = new List<string>();
	
	private string fetchedData;
	private string apiURL;	
	
	private API_Requests request;
	/*private CuisinesData cuisineData = new CuisinesData();
	private DietsData dietData = new DietsData();*/
	
	public GameObject controller, cuisineScroll, dietScroll,
										cuisineButton, dietButton;
	
	public Text cusineInfoText, dietInfoText;

	// Use this for initialization
	void Start () {
		apiURL = PlayerPrefs.GetString("API_URL");
		jsonRequests.Add("{\"query\": \"{getCuisines{id name}}\"}");
		jsonRequests.Add("{\"query\": \"{getDiets{id name}}\"}");
		jsonRequests.Add("{\"query\": \"{getMeals{id name}}\"}");
		jsonRequests.Add("{\"query\": \"{getDifficulties{id name}}\"}");
		request = controller.GetComponent<API_Requests>();
		
		cuisineScroll.SetActive(false);
		dietScroll.SetActive(false);
		cuisineButton.SetActive(true);
		dietButton.SetActive(true);
	}
	
	/*public IEnumerator getExtras()
	{
		yield return new WaitForSeconds(0.1f);
		// Call to Cuisines in GraphQL
		API_Requests cdCuisine = new API_Requests(this, request.PostRequest(apiURL, jsonRequests[0]));
		yield return cdCuisine.coroutine;
		fetchedData = (cdCuisine.result).ToString();
		
		cuisineData = JsonUtility.FromJson<CuisinesData>(fetchedData);
		
		if(cuisineData.getCuisines.Count == 0)
		{
			cusineInfoText.text = "No hay tipos de cocina, crea uno aquí";
			cuisineButton.SetActive(true);
			dietButton.SetActive(true);
		}
		else
		{
			cusineInfoText.text = "";
			cuisineScroll.SetActive(true);
		}
		
		// Call to Diets in GraphQL
		API_Requests cdDiet = new API_Requests(this, request.PostRequest(apiURL, jsonRequests[1]));
		yield return cdDiet.coroutine;
		fetchedData = (cdDiet.result).ToString();
		
		dietData = JsonUtility.FromJson<DietsData>(fetchedData);
		
		if(dietData.getDiets.Count == 0)
		{
			dietInfoText.text = "No hay tipos de dieta, crea uno aquí";
		}
		else
		{
			foreach (DietObject diet in dietData.getDiets)
			{
				dietOptions.Add(diet.name);
			}
			dietScroll.SetActive(true);
			Debug.Log(dietOptions[1]);
		}
	}*/
	
	public void buttonPress()
	{
		//StartCoroutine(getExtras());
	}
}