/* 
Selection Sort: 

const lista = [7,5,1,3,2,6,9,4,8];

function selection_sort(arr){
    for(let j = 0; j < arr.length - 1; j++){ 
        let indMin = j;

        for(let i = j + 1; i < arr.length; i++){
            if(arr[i] < arr[indMin]){
                indMin = i;
            }
        }

        let auxiliar = arr[j];
        arr[j] = arr[indMin];
        arr[indMin] = auxiliar;
        }

    return arr;
}

console.log(selection_sort(lista));*/

/* 
Insertion Sort: 

const lista = [12,11,13,5,6];

function insertion_sort(arr){
    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > current){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}

console.log(insertion_sort(lista));
*/

/* Método Merge:

const a = [7,10,19,20,32,49,43,48];
const b = [9,12,17,19,28,30,31,50];
const v = [];

let i = 0;
let j = 0;
let k = 0;

while(i < a.length && j < b.length){
    if(a[i] <= b[j]){
        v[k] = a[i];
        i++;
        k++;
    } else {
        v[k] = b[j];
        j++;
        k++;
    }
}
while(i < a.length){
    v[k] = a[i];
    k++;
    i++;
}
while(j < b.length){
    v[k] = b[j];
    k++;
    j++;
}

console.log(v) */

/* 
Merge Sort:

const lista = [7,1,2,8,9,4];

function merge_sort(array) {
  const half = Math.floor(array.length / 2);
  
  // Base case or terminating case
  if(array.length < 2){
    return array 
  }
  
  const left = array.splice(0, half)
  return merge(merge_sort(left),merge_sort(array))
}


function merge(leftArr, rightArr){
    let i = 0;
    let j = 0;
    let k = 0;

    let finalArr = [];

    while(i < leftArr.length && j < rightArr.length){
        if(leftArr[i] <= rightArr[j]){
            finalArr[k] = leftArr[i];
            i++;
            k++;
        } else {
            finalArr[k] = rightArr[j]
            j++;
            k++;
        }
    }
    while(i < leftArr.length){
        finalArr[k] = leftArr[i];
        i++;
        k++;
    }
    while(j < rightArr.length){
        finalArr[k] = rightArr[j];
        j++;
        i++;
    }
    return finalArr;
}

console.log(merge_sort(lista));*/