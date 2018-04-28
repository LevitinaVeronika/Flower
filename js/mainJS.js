$(document).ready(function(){
  $(document).on("click", ".tabSelect",
      function(){
          $('nav .active').removeClass('active');
          $(this).addClass('active');
          var a=$(this).attr('numberTab');
          $('.tabContent').hide();
          $("#mainidcontent"+a).show();
      });
    navMobile();
  ////выдвижной nav//////
    function navMobile() {
        if ($(document).width() <= '600') {
            $('.navHidden').show();
            $('.tabs_block').removeClass('computerNav').addClass('mobileNav');
        }
        else {

            $('.navHidden').hide();
            $('.tabs_block').addClass('computerNav').removeClass('mobileNav');
        }
    }
    $(document).on("click", ".navHidden",
        function(){
        $('.tabs_block').toggleClass('visible');

        }
    );
    // if ($('.navHidden').hasClass("visible")){
    //  $(document).on("click", '.wrap',
    //      function() {
    //         $('.tabs_block').removeClass('visible');
    //     })
    // }



//////Для ТАБООВ///
$(document).on('click','aside a',
function(){
    $('.activeTab').removeClass('activeTab');
    $(this).addClass('activeTab');

}
);
});
//
// function differ(a){
//     for(var i=2;i<a;i++){
//         var rez=a%i;
//         var flag = false;
//         if (rez===0){
//         flag = true;
//         break
//         }
//     }
//     if (flag==true){
//         return alert('yes')
//     }
//     else return alert('no')
// }
// differ(11);
//

// document.write('<table>');
// for (var i=1;i<=9;i++){
//     document.write('<tr>');
//     for(var j=1;j<=9;j++){
//         var rez=i*j;
//
//         document.write('<td>'+i+'x'+j+'='+rez+'</td>');
//     }
//     document.write('</tr>');
// }
// document.write('</table>');

// function isNumberInRange(num){
//     return num>0&&num<10;
// }
// alert(isNumberInRange(-3));
//
// var arr=[1,2,3,-6,-5,9,10];
// var arr1=[];
// for(var i=0;i<arr.length;i++){
//     if(isNumberInRange(arr[i])){
//
//     arr1.push(arr[i]);
//     }
// }
// alert(arr1);
//
//
// function getDigitSum(num){
//     var str=String(num);
//     var arr=str.split('');
//     var summ=0;
//     for (var i=0;i<arr.length;i++){
//         summ+=+arr[i];
//     }
//     return summ;
// }

// function getDivisors(num){
//     var arr=[];
//     for (var i=0;i<num;i++){
//         if(num%i==0){
//             arr.push(i);
//         }
//     }
//     return arr;
//
// }
// var str='привет, меня зовут ника, я сделаю все первые буквы слов заглавными, это магия';
// function bigFirstLetter(a){
//     var letterFirst=a.slice(0,1);
//     var bigLetterFirst=letterFirst.toUpperCase();
//     var bigFirstWord=bigLetterFirst+a.substring(1);
//     return bigFirstWord;
// }
//
// function bigFirstWordLetter(str,split){
//     var arr1=[];
//     var arr=str.split(split);
//     for (var i=0;i<arr.length;i++){
//       arr1.push(bigFirstLetter(arr[i]));
//     }
//     return arr1;
// }
// function bigLetterInString(arr,deletel){
//     var str='';
//     for (var i=0;i<arr.length;i++){
//         str+=arr[i]+deletel;
//     }
//     return str;
//
// }
// var arr=bigFirstWordLetter(str,' ');
// var strResult=bigLetterInString(arr,' ');
//
// var newStr='var_text_hello';
// var arr2=bigFirstWordLetter(newStr,'_');
// alert(bigLetterInString(arr2,''));


//
//
// var arr=[1,2,563,4,563,6,7,967,43,34,674,75,426];
// function intervalArrView(min,max,arr){
//     for(var i=0;i<arr.length;i++){
//         if (arr[i]<max&&arr[i]>min){
//             document.write(arr[i])
//         }
//     }
// }
// intervalArrView(1,10,arr);

function testAnotherFunc(elem){
    elem.value = 'Новый текст кнопки';

}
