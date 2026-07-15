console.log("HTML Connected");

let count=0;

function login()
{
    let isUserValid=collect_username();
    let isPassValid=collect_password();

    if(isUserValid==false || isPassValid==false)
    {
        return false;
    }

    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    if(username=="AIUB" && password=="$_student")
    {
        document.getElementById("message").innerHTML="Successfully Logged In";
        count=0;
    }
    else
    {
        count++;

        if(count==1)
        {
            document.getElementById("message").innerHTML="You have 3 attempts left.";
        }
        else if(count==2)
        {
            document.getElementById("message").innerHTML="You have 2 attempts left.";
        }
        else if(count==3)
        {
            document.getElementById("message").innerHTML="You have 1 attempt left. You are locked for 5 minutes.";

            setTimeout(function()
            {
                count=0;
            },300000);
        }
    }

    return false;
}


function collect_username()
{
    let username=document.getElementById("username").value;

    if(username=="")
    {
        document.getElementById("UserError").innerHTML="Username Can Not Be Empty";
        return false;
    }

    return true;
}


function collect_password()
{
    let password=document.getElementById("password").value;

    if(password=="")
    {
        document.getElementById("PassError").innerHTML="Password Can Not Be Empty";
        return false;
    }

    return true;
}