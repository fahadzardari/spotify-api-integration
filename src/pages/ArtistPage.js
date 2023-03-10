import { useCallback, useEffect , useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ArtistPage.module.css";
import axios from "axios";
import Card from "../components/Card"

const ArtistPage = ({ar}) => {
  const navigate = useNavigate();
  const [artists , setArtists] = useState([])

  const onBackButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const loc = useLocation()
  
  const fetchData = async ()=>{

  }

  
  useEffect(async ()=>{
    const { data } = await axios.get(`https://api.spotify.com/v1/artists?ids=${loc.state.artists}`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      }
    });

    console.log(data.artists)
    setArtists(data.artists)
  },[])



  return (
    <div className={styles.artistPage}>
    
      <div className={styles.mainBody}>



        <div className={styles.mainBodyChild} />
        {
          artists.map((i) => {
            
              return    <div className={styles.card4}>
              <div className={styles.card4Child} />
              <div className={styles.monthlyListeners}>
                  {i.followers.total}  monthly listeners
                <div></div>
              </div>
              <div className={styles.antent}>{i.name}</div>
              <img
                className={i.images[1].url}
                alt="artist image"
                src="../image-4@2x.png"
              />
            </div>
          })

        }

        <div className={styles.card3}>
          <div className={styles.card4Child} />
          <img className={styles.image3Icon} alt="" src="../image-3@2x.png" />
          <div className={styles.mathbonus}>Mathbonus</div>
          <div className={styles.monthlyListeners1}>
            446,831 monthly listeners
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.card4Child} />
          <div className={styles.monthlyListeners}>
            798,102 monthly listeners
          </div>
          <div className={styles.tilekid}>TileKid</div>
          <img className={styles.image4Icon} alt="" src="../image-2@2x.png" />
        </div>
        <div className={styles.card1}>
          <div className={styles.card4Child} />
          <img className={styles.image3Icon} alt="" src="../image-1@2x.png" />
          <div className={styles.neheart}>Øneheart</div>
          <div className={styles.monthlyListeners3}>
            5,879,962 monthly listeners
          </div>
        </div>
        <div className={styles.heading}>
          <span>{`Artist Showcase: `}</span>
          <b>Ambient</b>
        </div>
        <div className={styles.backButton} onClick={onBackButtonContainerClick}>
          <img className={styles.vectorIcon} alt="" src="../vector.svg" />
          <div className={styles.back}>Back</div>
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.bg} />
        <img className={styles.navLogoIcon} alt="" src="../navlogo@2x.png" />
        <div className={styles.navMenu}>
          <div className={styles.contact}>Contact</div>
          <div className={styles.home} onClick={onHomeTextClick}>
            Home

          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
