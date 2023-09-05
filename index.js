var data= {
    chatinit:{
        title: ["Hello <span class='emoji'> &#128075;</span>","I am Mr. Chatbot","'Welcome to Niri Global Services Pvt Ltd! How can we assist you today?"," Here are some things you can do:"],
        options:['services','team',' process']    
        },
    services: {
        title:["Please select category"],
        options:['web Design','Web Devlopment','Product Management','marketing','graphic Design'],
        url : {
            
        }
    }, 
    web: {
        title: ["Thanks for your response...<span class='emoji'> &#128522;</span>","Transforming ideas into visually appealing websites that resonate with your audience, blending creativity and functionality seamlessly."],
        options:["More Questions"],
        url : {
            
        }
    },
     Devlopment: {
        title: ["Thanks for your response...<span class='emoji'> &#128522;</span>","Unlock your digital potential with our comprehensive web development services, crafting dynamic websites and applications that merge stunning design with seamless functionality."],
        options:["More Questions"],
        url : {
            
        }
    },
    product: {
        title: ["Thanks for your response...<span class='emoji'> &#128522;</span>","Comprehensive product management services that guide ideation, development, and launch, ensuring seamless execution from concept to market success."],
        options:["More Questions"],
        url : {
            
        }
    },
    marketing: {
        title: ["Thanks for your response...<span class='emoji'> &#128522;</span>","Unlock success with tailored marketing strategies that captivate audiences and drive results."],
        options:['Mobile Phones','Cases & Covers','Power Banks','Tablets'],
        options:["More Questions"],
        url : {
            
        }
    },
    graphic: {
        title: ["Thanks for your response...<span class='emoji'> &#128522;</span>","Transforming ideas into captivating visuals through expert Graphic Design services, delivering impactful and compelling designs for your brands success."],
        options:["More Questions"],
        url : {
            
        }
    },
    
    team: {
        title:["Thanks for your response...<span class='emoji'> &#128522;</span>","Our skilled and experienced IT experts collaborate to provide top-notch solutions."],
        options:["More Questions"],
        url : {
            
        }
    },
    process: {
        title:["Thanks for your response...<span class='emoji'> &#128522;</span>","Our development process involves planning, design, implementation, and testing."],
        options:["More Questions"],
        url : {
            
        }
    },
    more: {
        title:["you have any Other Qury.."],
        options:['Yes','No'],
        url: {
           
        }
    },
    yes:{
        title:["Please send your query to our official email address.Our team Response on your mail as soon as possible"],
    },
    no:{
        title:[" Thank you for chatting with me. Have a great day!... "],

    }
  
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}