import "./Home.css"

export const Home=()=>{
    return(
        <div>
                <div className="offerdiv">
                <div className="leftbox">
                <h1 class="lefthead">Welcome to Prime Video</h1>
                <p className="leftmidsidepara">Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</p>
                <button  style={{marginLeft:"-60%"}} className="mybutton">Start your 30-day free trail</button>
                <p className="leftsmallpara">With select credit or debit cards</p>
                </div>
                <div className="rightbox"></div>
                </div>


                <div className="offerdiv2">
                <div className="leftbox">
                <h1  style={{fontWeight:"400",fontSize:"2.5rem"}} class="lefthead">Movie rentals on Prime Video</h1>
                
                <p className="leftsmallpara">Early Access to new movies, before digital subscription</p>
                <br />
                <br />
                <button style={{marginLeft:"-60%",paddingLeft:"80px",paddingRight:"80px"}} className="mybutton">Rent Now</button>
                </div>
                <div className="rightbox"></div>
                </div>


                <div className="div3">
                    <div className="leftbox3">
                        <h1 className="box3h1">Your favorite channels all in one place</h1>
                        <p className="box3p">With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice</p>
                        </div>
                    <div className="rightbox3">
                        <img className="myimgin9" src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg" alt="" />
                        <img className="myimgin9" src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Discovery.jpg" alt="" />
                        <img className="myimgin9" src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Erosnow-426X2948_V1.jpg" alt="" />
                        <img className="myimgin9" src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/hoichoi-426X2946_V1.jpg" alt="" />
                        <img className="myimgin9" src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Docubay-426X2947_V1.jpg" alt="" />
                        <img className="myimgin9" src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/ShortsTV-426X2944_V1.jpg" alt="" />
                        <img className="myimgin9" src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Mubi-426X2946_V1.jpg" alt="" />
                        <img className="myimgin9" src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_MANORAMAMAX.jpg" alt="" />
                        <img className="myimgin9" src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/Hayu_logo_for_MLP_Grid.jpg" alt="" />
                    </div>

                </div>



                <div className="offerdiv4">
               
                <div className="rightbox"></div>
                <div style={{marginLeft:"80px"}} className="leftbox">
                <h1  style={{fontWeight:"400",fontSize:"2.5rem"}} class="lefthead">Even better with Fire TV Stick</h1>
                
                <p style={{fontSize:"21px"}} className="leftsmallpara">The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press the voice button on the remote and say the name of the title you want to watch to find it in seconds.</p>
                <br />
                <br />
                <button style={{marginLeft:"-60%",paddingLeft:"80px",paddingRight:"80px"}} className="mybutton">Get Started</button>
                </div>
                </div>



                <div className="offerdiv5">
                <div style={{marginRight:"120px"}} className="leftbox">
                <h1  style={{fontWeight:"400",fontSize:"2.5rem"}} class="lefthead">Family Friendly</h1>
                
                <p style={{fontSize:"21px"}} className="leftsmallpara">With easy to use Parental Controls and a dedicated kids page, enjoy secure, ad-free kids entertainment. Kids can enjoy popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.</p>
                <br />
                <br />
                <button style={{marginLeft:"-60%",paddingLeft:"80px",paddingRight:"80px"}} className="mybutton">Get Started</button>
                </div>
                <div className="rightbox"></div>
                </div>





        </div>
    )
}