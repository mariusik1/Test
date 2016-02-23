var sumOfEvenNr=function(array)
{
	var sum=0;
	for(i=0; i<array.length; i++)
	{
		if(array[i]%2===0)
		{
			sum+=array[i];
		}
	}
	return sum;
}

var twoMax=function(array)
{
	var max1;
	var max2;
	if(array[0]>array[1])
	{
		max1=array[0];
		max2=array[1];
	}
	else
	{
		max1=array[1];
		max2=array[0];
	}
	for(i=2; i<array.length; i++)
	{
		if(array[i]>max2)
		{
			if(array[i]>max1)
			{
				max2=max1;
				max1=array[i];
			}
			else
			{
				max2=array[i];
			}
		}
	}
	return [max1,max2];
}

var hadDuplicate=function(array)
{
	for(i=0;i<array.length;i++)
	{
		if(array[Math.abs(array[i])-1]>0)
		{
			array[Math.abs(array[i])-1]=-array[Math.abs(array[i])-1];
		}
		else
		{
			return true;
		}
	}
	return false;
}