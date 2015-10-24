package main

import "fmt"

func insertionSort(array []int) {
	for i := 1; i < len(array); i++ {
		value := array[i]
		j := i - 1

		for j >= 0 && array[j] > value {
			array[j + 1] = array[j]
			j = j - 1
		}

		array[j + 1] = value
	}
}

func main() {
	data := []int{10, 2, 1, 23, 12, 32, 29}
	fmt.Println("Input: ", data)
	insertionSort(data)
	fmt.Println("Output: ", data)
}
