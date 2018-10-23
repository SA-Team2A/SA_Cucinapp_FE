using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DataObjects : MonoBehaviour {

}

[Serializable]
public class CuisinesData
{
	public List<CuisineObject> getCuisines; 
}

[Serializable]
public struct CuisineObject
{
	public int id;
	public string name;
}

[Serializable]
public class DietsData
{
	public List<DietObject> getDiets; 
}

[Serializable]
public struct DietObject
{
	public int id;
	public string name;
}