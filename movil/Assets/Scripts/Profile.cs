using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Profile : MonoBehaviour {

	private API_Requests request;

	public Text username;
	
	private string user;

	// Use this for initialization
	void Start () {
	}
	
	// Update is called once per frame
	void Update () {
		user = PlayerPrefs.GetString("User_Username");
		username.text = user;
	}
	
	public void logOut()
	{
		PlayerPrefs.DeleteAll();
	}
	
	/*public IEnumerator getUser()
	{
		yield return new WaitForSeconds(0.1f);
		// Call to Cuisines in GraphQL
		API_Requests cdUser = new API_Requests(this, request.PostRequest(apiURL, "{\"query\": \"{getUserByEmail{id name}}\"}"));
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
}
