btn=document.querySelector("button");
msg=document.getElementById("msg");
msg1=document.getElementById("msg1");
msg2=document.getElementById("msg2");
msg3=document.getElementById("msg3");
msg4=document.getElementById("msg4");
msg5=document.getElementById("msg5");
msg6=document.getElementById("msg6");
msg7=document.getElementById("msg7");
btn.onclick=function()
{
    var using=document.getElementById("name").value;
 
        cont(using);
        // text(using);
        uppar(using);
        digit(using);
        space(using);        
        string(using);
        lower(using);
        // length(using);
        

}
function cont(using){
        var alpha;
        var vowel=0;
        var consonant=0;

        for(var i=0 ; i<using.length ; i++ ) {
                alpha=using[i];
                if(alpha=='A'||alpha=='E'||alpha=='I'||alpha=='O'||alpha=='U'||
                alpha=='a'||alpha=='e'||alpha=='i'||alpha=='o'||alpha=='u')
                
                {
                        vowel++;
                }
                else
                {
                        consonant++;
                }
                
        }

        msg1.innerHTML="<h2>" +vowel +"</h2>";
        msg2.innerHTML="<h2>"+consonant+"</h2>";
}       
// }
// function text(using)
// {
//         var alpha;
//         var consonant=0;

//         for(var index=0; index<using.length ; index++ ) 
//         {     
//                 alpha=using[index];
                
//                 if(alpha=='a'||alpha=='e'||alpha=='i'||alpha=='o'||alpha=='u')
//                 {      
//                         consonant++;
//                 }
//         }
//         msg1.innerHTML="<h4>"+consonant+"</h4>";
// }                
function uppar(using)
{
        var upper=0;

        var alpha;
        for(var i=0; i<using.length; i++)
        {
                alpha=using[i];
                if(alpha>='A' && alpha<='Z')
                {
                      upper++;
                }
       }

        msg3.innerHTML="<h2>"+upper+"</h2>";
                 
}
  function lower(using)
{
        
        var lower=0;
        var alpha;
        for(var i=0; i<using.length; i++)
        {
                alpha=using[i];
                if(alpha>='a' && alpha<='z')
                {
                        lower++;
                }
                console.log(lower);
        } 
        msg4.innerHTML="<h2>"+lower+"</h2>";       
}
function digit(using)
{       
        

                var digit=0;
                var alpha;
                for(var i=0;  i<using.length; i++)
                {
                        alpha=using[i];
                        if(alpha>='0' && alpha<='9')
                        {
                                digit++;
                                
                        }
                }
                msg5.innerHTML="<h2>"+digit+"</h2>";

}
function space(using)
{
        var alpha;
        var space=0;

        for(var i=0;i<using.length;i++)
        {
                alpha=using[i];

                if(alpha==' ')
                {
                        space++;
                }
        }
        msg6.innerHTML="<h2>"+space+"</h2>";
       

}
function string(using)
{
        var alpha;
        
        var string=0;

        for(var i=0;i<using.length;i++)
        {
                alpha=using[i];

                if(alpha=='!' ||alpha=='@' ||alpha=='#' ||alpha=='$' ||alpha=='%' ||alpha=='^'||alpha=='&'||alpha=='*')
                {
                        string++;
                }
                
        }
        
        msg7.innerHTML="<h2>"+string+"</h2>";
        // mag.innerHTML="<4>"+length+"</h4>";
}        