/*
1. 归并排序
a. 2个，2部分比较大小排序合并
b. 4个，2部分比较大小排序合并，以最左边数的比较大小排序
...log2N 次后结束
*/


function guibinSort(arr){
	
	
	var h = arr.length == 1?0: arr.length%2 == 0 ?  arr.length/2:(arr.length+1)/2 ;

	
	if(h != 0 ){
		var al = copyArr(0,h,arr);
		var ar = copyArr(h,h,arr);
		console.log(al);
        console.log(ar);
		console.log('--------');
		return guibin3(guibinSort(al),guibinSort(ar));
	}
	
	return arr;
	 
}

/*
单次归并
1. 左右两个指针，比较指针所在的数，小则放入新数组。
2. 直到一侧指针移到末尾后(一定会出现某侧指针移先到末尾)，则将另一侧的指针的数全部放入新数组

*/
function guibin(arr){
	
	if(arr.length == 0) return arr;

	var half = arr.length%2 == 0 ?  arr.length/2:(arr.length+1)/2 ;
	var narr = [];
	var lIndex = 0;
	var rIndex = half;
	
	do{
		
			if(lIndex == half){   //左指针移到末尾
				
				narr[narr.length] = arr[rIndex++];
				
			}else if(rIndex == arr.length){ //右指针移到末尾
				
				narr[narr.length] = arr[lIndex++];
			}else {                         //左右指针都没有到末尾         
				
				narr[narr.length] = arr[lIndex] < arr[rIndex] ? arr[lIndex++] : arr[rIndex++];
			}
		
			
		 
	}while(lIndex != half || rIndex != arr.length ); //左右指针都到末尾了,注意，不同的终止条件采用不同的循环，这里用while 好过for 
		
	
	return narr;
	
}

function guibin2(arr){
	
	if(arr.length == 0) return arr;
	
	var half = arr.length%2 == 0 ?  arr.length/2:(arr.length+1)/2 ;
	var narr = [];
	var lIndex = 0;
	var rIndex = half;
	
	do{
		
     narr[narr.length] = lIndex == half? arr[rIndex++]: rIndex == arr.length? arr[lIndex++]: arr[lIndex] < arr[rIndex] ? arr[lIndex++] : arr[rIndex++];
			 
				
		 
	}while(lIndex != half || rIndex != arr.length ); //左右指针都到末尾了,注意，不同的终止条件采用不同的循环，这里用while 好过for 
		
	
	return narr;
	
}

/*合并两部分排好序的数组*/
function guibin3(a1,a2){
	
	var narr = []; 
	var lIndex = 0;
	var rIndex = 0;
	
	do{
		
			if(lIndex == a1.length){   //左指针移到末尾
				
				narr[narr.length] = a2[rIndex++];
				
			}else if(rIndex == a2.length){ //右指针移到末尾
				
				narr[narr.length] = a1[lIndex++];
			}else {                         //左右指针都没有到末尾         
				
				narr[narr.length] = a1[lIndex] < a2[rIndex] ? a1[lIndex++] : a2[rIndex++];
			}
		
			
		 
	}while(lIndex != a1.length || rIndex != a2.length ); //左右指针都到末尾了,注意，不同的终止条件采用不同的循环，这里用while 好过for 
		
	
	return narr;
	
}
/*
对数组切割成多个单个数组后，合并回来原来的数组
*/
function split(arr){
	
	var h = arr.length == 1?0: arr.length%2 == 0 ?  arr.length/2:(arr.length+1)/2 ;

	
	if(h !=0 ){
		var al = copyArr(0,h,arr);
		var ar = copyArr(h,h,arr);
		console.log(al);
        console.log(ar);
		console.log('--------');
		return Array.prototype.concat(split(al),split(ar));
	}
	
	return arr;
	
}

function copyArr(f,len,arr){
	
	var na = [];
	for(;len>0 && f<arr.length;len--){
		
		na[na.length] = arr[f++];
	}
	
	return na;
}

//堆排序
//1.所有的数堆整理  
//2.取出最前面的数(即最大的数)移动最后面  
//3.重新对前面的数堆整理
//4.重复步骤2，3 直到最前面的数和最前面第二个数交换
//arrHeap2([4,5,6,1,2,3,7],6)

function heapSort(arr){

	//所有的数堆排序
	arrHeap2(arr, arr.length - 1);
    
    for(var i = arr.length -1 ; i>0;i--){

    	var tmp = arr[i];
    	arr[i] = arr[0];
    	arr[0] = tmp;

    	//重新堆排序
    	arrHeap2(arr,i-1);
    }

    return arr;
}
//对数组进行堆的整理 2.0
function arrHeap2(arr, end){

   for(var i=1;i<=end; i++){

   	 	while(swapKid(arr,i)){

   	 		var p = (i%2 == 0? i-2: i-1)/2 ;
   	 		if(p == 0){
   	 			break;
   	 		}else {
   	 			swapKid(arr,p);
   	 		}
   	 	}
   	}

    return arr;
}

function swapKid(arr,i){

     var p = (i%2 == 0? i-2: i-1)/2 ;

     if(arr[p]<arr[i]){

     	var tmp = arr[i];
     	arr[i] = arr[p];
     	arr[p] = tmp;
     	return true;	
     }

     return false;

}

