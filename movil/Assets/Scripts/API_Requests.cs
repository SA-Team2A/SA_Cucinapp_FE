using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;

public class API_Requests : MonoBehaviour {

	public Coroutine coroutine { get; private set; }
	public object result;
	private IEnumerator target;
	
	public API_Requests(MonoBehaviour owner, IEnumerator target)
	{
		this.target = target;
		this.coroutine = owner.StartCoroutine(Run());
	}

	private IEnumerator Run()
	{
		while(target.MoveNext())
		{
			result = target.Current;
			yield return result;
		}
	}
	
	public IEnumerator PostRequest(string url, string json)
	{
		var uwr = new UnityWebRequest(url, "POST");
		byte[] jsonToSend = new System.Text.UTF8Encoding().GetBytes(json);
		uwr.uploadHandler = (UploadHandler)new UploadHandlerRaw(jsonToSend);
		uwr.downloadHandler = (DownloadHandler)new DownloadHandlerBuffer();
		uwr.SetRequestHeader("Content-Type", "application/json");

		//Send the request then wait here until it returns
		yield return uwr.SendWebRequest();

		if (uwr.isNetworkError)
		{
			yield return ("Error While Sending: " + uwr.error);
			Debug.Log("Error While Sending: " + uwr.error);
		}
		else
		{
			var data = uwr.downloadHandler.text;
			string fixedData = data.Remove(data.Length-1,1);
			fixedData = fixedData.Remove(0, 8);
			yield return fixedData;
		}
	}
}
