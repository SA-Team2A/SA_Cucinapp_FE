using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DataObjects : MonoBehaviour {

}

[Serializable]
public class CollectionsData
{
	public List<CollectionObject> getCollections; 
}

[Serializable]
public struct CollectionObject
{
	public int id;
	public int user_id;
	public string name;
}