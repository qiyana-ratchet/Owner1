import styles from '../css/FirstPage.module.css'
import Button from '../component/Button';
import React, {useState} from 'react';
import styles2 from '../css/JoinPage.css'
import bannerStyles from '../css/JoinPage.module.css'
import Ticker from 'react-ticker'
import mag from '../img/magnifyingGlass.png'
import MenuHeader from "../component/MenuHeader";

function JoinPage() {
    function googleLogin() {
        console.log("google 로그인")
    }

    return (

        <div>
            <MenuHeader></MenuHeader>

            <Ticker speed={15} height={170}>
                {({index}) => (
                    <div className={bannerStyles.bannerContainer}>
                        <ul>
                            <a className={bannerStyles.bannerContainer3}>Perfume </a>
                            <a className={bannerStyles.bannerContainer3}>Grocery </a>
                            <a className={bannerStyles.bannerContainer3}>Jewelry </a>
                            <a className={bannerStyles.bannerContainer3}>Papaya </a>
                            <a className={bannerStyles.bannerContainer3}>Papaya </a>
                        </ul>
                    </div>
                )}
            </Ticker>
            <hr/>
            <Ticker speed={15} height={170} direction={"toRight"}>
                {({index}) => (
                    <div className={bannerStyles.bannerContainer}>
                        <ul>
                            <a className={bannerStyles.bannerContainer3}>Homewear </a>
                            <a className={bannerStyles.bannerContainer3}>Poster card </a>
                            <a className={bannerStyles.bannerContainer3}>Bedding </a>
                            <a className={bannerStyles.bannerContainer3}>Grocery </a>
                        </ul>
                    </div>
                )}
            </Ticker>
            <hr/>
            <Ticker speed={15} height={170}>
                {({index}) => (
                    <div className={bannerStyles.bannerContainer}>
                        <ul>
                            <a className={bannerStyles.bannerContainer3}>lamp </a>
                            <a className={bannerStyles.bannerContainer3}>Phone case </a>
                            <a className={bannerStyles.bannerContainer3}>Grip tok </a>
                            <a className={bannerStyles.bannerContainer3}>Bedding </a>
                            <a className={bannerStyles.bannerContainer3}>Cat </a>
                        </ul>
                    </div>
                )}
            </Ticker>
            <hr/>
            <Ticker speed={15} height={170} direction={"toRight"}>
                {({index}) => (
                    <div className={bannerStyles.bannerContainer}>
                        <ul>
                            <a className={bannerStyles.bannerContainer3}>Mini Bag </a>
                            <a className={bannerStyles.bannerContainer3}>Bookmark </a>
                            <a className={bannerStyles.bannerContainer3}>Glasses </a>
                            <a className={bannerStyles.bannerContainer3}>fabric </a>
                            <a className={bannerStyles.bannerContainer3}>Cup </a>
                        </ul>
                    </div>
                )}
            </Ticker>
            <hr/>
            <Ticker speed={15} height={170}>
                {({index}) => (
                    <div className={bannerStyles.bannerContainer}>
                        <ul>
                            <a className={bannerStyles.bannerContainer3}>Swimwear </a>
                            <a className={bannerStyles.bannerContainer3}>Book </a>
                            <a className={bannerStyles.bannerContainer3}>Poster </a>
                            <a className={bannerStyles.bannerContainer3}>filmcamera </a>
                            <a className={bannerStyles.bannerContainer3}>Film </a>
                        </ul>
                    </div>
                )}
            </Ticker>
            <hr/>


            {/*<h2>Wishchiving</h2>*/}
            {/*<h3>계정 만들기</h3>*/}
            {/*<a>로그인하면 어쩌구저쩌구 동의하는 것이고...<br/></a>*/}
            {/*<Button className="" text="Google 계정으로 로그인 하기" onClick={googleLogin}/>*/}
            {/*<Button className={styles.appleLoginButton} text="Apple 계정으로 로그인 하기" onClick={googleLogin}/>*/}
            {/*<Button className={styles.kakaoLoginButton} text="Kakao 계정으로 로그인 하기" onClick={googleLogin}/>*/}
            {/*<Button className={styles.emailLoginButton} text="휴대폰 번호 혹은 이메일로 가입하기" onClick={googleLogin}/>*/}

            {/*<a className={styles.loginWithAccount}>Google 계정으로 로그인 하기<br/></a>e*/}
            {/*<a className={styles.loginWithAccount}>Apple 계정으로 로그인 하기<br/></a>*/}
            {/*<a className={styles.loginWithAccount}>Kakao 계정으로 로그인 하기<br/></a>*/}
            {/*<a className={styles.loginWithAccount}>휴대폰 번호 혹은 이메일로 가입하기</a>*/}

        </div>
    )
}

export default JoinPage;