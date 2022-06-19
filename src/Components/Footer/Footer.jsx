import "../Footer/Footer.css"

export const Footer=()=>{
    return(
        <div className="footermaindiv">
            <img className="footerlogo" src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png" alt="" />
            <span class="footerbluetext"><a href="/help/ref=dvm_MLP_EU_privacy?nodeId=202064890">Terms and Privacy Notice</a></span>
            <span class="footerbluetext"><a href="/contactus/ref=dvm_MLP_EU_contact">Send us feedback</a></span>
            <span class="footerbluetext"><a href="https://www.amazon.com/help/ref=dvm_MLP_NA_help"> Help  </a></span>
            <p className="footerwhitetext">© 1996-2022, Amazon.com, Inc. or its affiliates</p>
        </div>
    )
}