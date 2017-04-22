var FormControlName = prompt("Enter the formControlName please");

if($0){
  Object.keys(ng.probe($0).componentInstance.[FormControlName].controls).forEach((data) => {
	  console.log(data,ng.probe($0).componentInstance.[FormControlName].controls[data].valid);
  });
}
