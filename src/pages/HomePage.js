import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import Login from "../components/Login"
import data from "../assets/data.json"
import axios from "axios";

const HomePage = () => {
  const navigate = useNavigate();

  const onButton8Click = useCallback(() => {
    // navigate("/desktop-2" , {artists:});
  }, [navigate]);

  const getAllArtists= (genre) => {
          navigate("desktop-2",{state:{artists:data[genre].artists}})
  }

  return (
    <div className={styles.homePage}>
     
      <main className={styles.mainBody}>
        <div className={styles.mainBodyChild} />
        <div className={styles.list}>
          <div className={styles.listChild} />
          <div className={styles.listItem9}>
            <button className={styles.button}>
              <div className={styles.buttonChild} />
              <div className={styles.viewDetail}>View Detail</div>
            </button>
            <div className={styles.jerseyClub}>9. Jersey Club</div>
          </div>
          <div className={styles.listItem8}>
            <button className={styles.button1}>
              <div className={styles.buttonChild} />
              <div className={styles.viewDetail}>View Detail</div>
            </button>
            <div className={styles.synthwave}>8. Synthwave</div>
          </div>
          <div className={styles.listItem7}>
            <button className={styles.button2}>
              <div className={styles.buttonChild} />
              <div className={styles.viewDetail}>View Detail</div>
            </button>
            <div className={styles.trapHiphop}>{`7. Trap, HipHop & Rap`}</div>
          </div>
          <div className={styles.listItem6}>
            <button className={styles.button3}>
              <div className={styles.buttonChild} />
              <div className={styles.viewDetail}>View Detail</div>
            </button>
            <div className={styles.danceElectronicMix}>
              6. Dance/ Electronic Mix
            </div>
          </div>
          <div className={styles.listItem5}>
            <button className={styles.button3}>
              <div className={styles.buttonChild} />
              <div className={styles.viewDetail}>View Detail</div>
            </button>
            <div className={styles.funk}>5. Funk</div>
          </div>
          <div className={styles.listItem4}>
            <button className={styles.button5}>
              <div className={styles.buttonChild} />
              <div className={styles.viewDetail}>View Detail</div>
            </button>
            <div className={styles.funk}>4. Indie</div>
          </div>
          <div className={styles.listItem3}>
            <button className={styles.button}>
              <div className={styles.buttonChild} />
              <div className={styles.viewDetail}>View Detail</div>
            </button>
            <div className={styles.funk}>3. Phonk</div>
          </div>
          <div className={styles.listItem2}>
          <button className={styles.button} onClick={() => getAllArtists("piano")}>
              <div className={styles.buttonChild} />
              <div className={styles.viewDetail}>View Detail</div>
            </button>
            <div className={styles.funk}>2. Piano</div>
          </div>
          <div className={styles.listItem1}>
            <div className={styles.ambient}>
              <ol className={styles.ambient1}>Ambient</ol>
            </div>
            <button className={styles.button} onClick={() => getAllArtists("ambient")}>
              <div className={styles.buttonChild} />
              <div className={styles.viewDetail}>View Detail</div>
            </button>
          </div>
          <img
            className={styles.linesDividedIcon}
            alt=""
            src="../linesdivided.svg"
          />
        </div>
        <div className={styles.searchBar}>
          <div className={styles.rectangle} />
          <div className={styles.searchText}>Search Artist</div>
          <img
            className={styles.searchButtonIcon}
            alt=""
            src="../searchbutton.svg"
          />
        </div>
      </main>
      <header className={styles.header}>
        <div className={styles.bg} />
        <img className={styles.navLogoIcon} alt="" src="../navlogo@2x.png" />
        <div className={styles.navMenu}>
          
          <div className={styles.contact}>Contact</div>
          <div className={styles.home}>Home</div>
          <Login />

        </div>
      </header>
    </div>
  );
};

export default HomePage;
