import React, { useEffect } from 'react'
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './Home.css'
import moonImg from '../../Images/moon.jpg';
import sunImg from '../../Images/venus.jpg';
import spaceImg from '../../Images/space.jpg';
import {
    Tooltip,
    Typography
} from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles';
import TimeLine from '../Timeline/TimeLine';
import {
    SiCplusplus, SiReact, SiJavascript, SiMongodb, SiNodedotjs, 
    SiExpress, SiCss3, SiHtml5, SiThreedotjs, SiPython, SiGit, SiJira,
     SiDjango, SiAnaconda, SiAngular, SiPostman, SiPostgresql, SiLinux, 
     SiFlutter, SiElasticsearch, SiGitlab, SiBitbucket, SiAmazonaws, SiOracle, 
     SiDocker, SiC, SiFastapi
} from "react-icons/si";
import YoutubeCard from '../YoutubeCard/YoutubeCard';


const Home = () => {
    useEffect(() => {
        const textureLoader = new THREE.TextureLoader();

        const moonTexture = textureLoader.load(moonImg);
        const sunTexture = textureLoader.load(sunImg);
        const spaceTexture = textureLoader.load(spaceImg);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75,
            window.innerWidth / window.innerHeight,
            0.1, 1000);
        // camera.position.z = 10;
        camera.position.set(4, 4, 8);

        const canvas = document.querySelector(".homeCanvas");
        const renderer = new THREE.WebGLRenderer({ canvas });

        // const geometry = new THREE.BoxGeometry(1, 1, 1);
        // const material = new THREE.moonBasicMaterial({ color: 0x00ff00 })
        // const material = new THREE.MeshBasicMaterial({ color: '#fff' })
        const moongeometry = new THREE.SphereGeometry(1.5, 64, 64);
        const moonmaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
        const moon = new THREE.Mesh(moongeometry, moonmaterial);

        const sungeometry = new THREE.SphereGeometry(3, 64, 64);
        const sunmaterial = new THREE.MeshBasicMaterial({ map: sunTexture });
        const sun = new THREE.Mesh(sungeometry, sunmaterial);
        sun.position.set(8, 5, 5);


        const pointLight = new THREE.PointLight(0xfffffff, 1);
        const pointLight2 = new THREE.PointLight(0xfffffff, 0.1);

        // const lightHelper = new THREE.PointLightHelper(pointLight);
        // const mesh = new THREE.Mesh(geometry, material);
        pointLight.position.set(8, 5, 5);
        pointLight2.position.set(-8, -5, -5);

        // const controls = new OrbitControls(camera, renderer.domElement);

        // scene.add(lightHelper);
        scene.add(moon);
        scene.add(pointLight);
        // scene.add(controls);
        scene.add(pointLight2);
        scene.add(sun);
        scene.background = spaceTexture;

        // sun.position.set(8, 5 , 5);
        // sun.position.set(4, 4, 8);
        const constantspeed = 0.01;
        window.addEventListener("mousemove", (e) => {
            if (e.clientX <= window.innerWidth / 2) {
                moon.rotation.x -= constantspeed;
                moon.rotation.y += constantspeed;
                sun.rotation.x -= constantspeed;
                sun.rotation.y += constantspeed;
            }
            if (e.clientX > window.innerWidth / 2) {
                moon.rotation.x -= constantspeed;
                moon.rotation.y -= constantspeed;
                sun.rotation.x -= constantspeed;
                sun.rotation.y -= constantspeed;
            }
            if (e.clientY > window.innerHeight / 2) {
                moon.rotation.x -= constantspeed;
                moon.rotation.y += constantspeed;
                sun.rotation.x -= constantspeed;
                sun.rotation.y += constantspeed;
            }
            if (e.clientY <= window.innerHeight / 2) {
                moon.rotation.x -= constantspeed;
                moon.rotation.y -= constantspeed;
                sun.rotation.x -= constantspeed;
                sun.rotation.y -= constantspeed;
            }
        })

        // pointLight.position.z = 10;

        const animationRotate = () => {
            requestAnimationFrame(animationRotate);
            // mesh.rotation.x += 0.01;
            // mesh.rotation.y += 0.01;
            // mesh.rotation.z += 0.01;
            // mesh.position.x += 0.01;
            // mesh.position.y += 0.01;
            // mesh.position.z += 0.01;

            // moon.rotation.x += 0.01;
            moon.rotation.y += 0.03;
            // moon.position.y = 3;
            sun.rotation.y += 0.01;
            // moon.rotation.z += 0.01;
            // moon.position.x += 0.01;
            // moon.position.y += 0.01;
            // moon.position.z += 0.01;
            // camera.position.x += 0.01;
            // camera.position.y += 0.01;
            // camera.position.z += 0.01;

            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera)
        }
        animationRotate();
    }, [])
    return (
        <div className="home">
            <canvas className="homeCanvas">
            </canvas>
            <div className="timeLineConatainer">
                <Typography varient="h4" className='timelineHeading' fontWeight={600}>
                    TIMELINE
                </Typography>

                <StyledEngineProvider injectFirst>
                    <TimeLine timelines={
                        [
                            { 1: "1" },
                            { 2: "1" },
                            { 3: "1" },
                            { 4: "1" },
                        ]}>
                    </TimeLine>
                </StyledEngineProvider>
            </div>
            <div className="skills">
                <Typography variant='h4' color={"#fff"} align='center'>
                    SKILLS
                </Typography>
                <div className="skillsCube">
                    <div className="cubeSkillsFaces cubeSkillsFaces1">
                        <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARUAAAC2CAMAAADAz+kkAAAAb1BMVEX///8A3P8A2/8A2f/1/v/6//+79f/m/P/p/P8A3v/w/f+R7P8g3//F9f/5///u/f/f+v9s6P+v8v+n8f966v/Z+f9F4P9Z5f/B9f9V5P+d7/+H7P+28//U+P/N+P9z6f844/+g7f+D6P+X7P+D7f+pm44WAAARRUlEQVR4nO1d7cKiOA+VCgpS5VMQUWSeee//Gl/apl/QAuOOCrueH7uPCA4NbZImJ2Gz+eKLL75YKQ778/HSxP7piWv9+Jhds13s//W7+iyavHUQQVDlu8OfXOnFYYkRA06Or7rBD+BcIeQAiGSSizfzyuhaIHltd3EVv/RO34hMGRcMDl/nrKQ4dwaXOunL7/ctCHsDg9GFU/Nln/RFwq7M3nLXL0ZmGhqVy+jwDrlRJuTCy7tu/XWIFYWCkDZS1DbWy9JAO1O7Nvgjdb1IVDAWVOR1WD9aXXnm5gHGFVJFEpR1lmZ1wX/q8eYx/HU0MJLg5tLP7v5aOYpcsGk5ZOoZweMYscPejR9buyHiD11dK/eHoxjquq913USV2lV13S7sG5S/4c5fCB+GcdUPE5MrtYvust6x/Apnrn5hDd+9+LZfjCsbBR58EZdy7I66iqRz000jt3+Zi9lXu1fe9MvBFpDRxbhIK6NMpVyZQybtwZyfdS8hD6bK3vit9EhQwo64wvbYvJmzY5l8K8KRPdnK8nUjVAhqiYmO5efKLMjNhpnn7ZpdFqZWUGj7/iDMDerm012oYGTfDjzQ6hXLDxuC3YXt5MZdMyzcWRSM+PQ3ZDJqqwIzNMGY03UMpCoZU7McdyaVn799q+/DqaVDwKMxNF/6J0wo5cAeq4gDVT2vES4bQTEeS3FLVSxTRtfHbD7NjVstDyAVmwkSeCguvlUz898smFSeif8uAwemA8rJE6UpqqdO9ZhpxqPLbNGYK5WdsoJG7BUDc/SCf71UGlXZBueJs/8jUmFWRSiWYCLr89+QykE4b9ydGx9wtXa94jrTNshruablKnfi/NVr2zmWWcgiEyGlUZflUKzeX2ExomLkufJkEfVTuN8ytssBL65ar1S8SY8/5XJgfgr3cke2xOv3+Cd3h9wm80EKJWO3zyzstObdIcQbkW2IEWwM5Xo48CNWbdpMhGxWAIiy2vgVFRdBJA7xVKPVnGf2SPBakI2GiLjNcdS5dFTVrwH5ZCBr8YDpblaNO7NqFdl6c0AOsgaR8ct1AJzbwvSdD44+eriRLxEdwBAhY5LdK5g2fvGNvxZs5APT7LkHXyQ5WhwE5Lzuc/cHxpirlso/uH23hOkd1L7p/l8DGPpdHnGbLEwqPCAxGdCdgqtHmDWKPWpWH7bdCCN0ox/OaVgFAxbLlGQox7AMU6aSr+s3Qdx3RYm7C9s/E4dBOG24A6WzahO02eyRHNWTAtFFA399elz/ELMngsSMK9acZj7d62JKHE6A27aqyoShrKqW2KQp4RT1fZ1B/jgsHMPQlNmAknO87xwU9yTtr3dyD5G/j2MZ9jfzS50iXB0PzE2roe0l48NFGXJPH485qD53W+qwLLBBNt2BKl1TRM6v8ZCO3blr+e1OCBjAhZzgze74frr7e3+/PVpnMPUQwvVaKh7Oj+GcR1XacAcewm+T/NCkx6k7NFlrWJCPqVTJEhCXukxgaHKDuOffTM1+l58opwMEpfR/AJVLl4uvy4TUd8Bf4hQeVJnm5fA1JEIthy37sTzo/SvlkteRF6p324kk74YOrEeuRAZDHUHVU0DgKbebzUUXjIG1uxgcVSYKckpGx6511iM3LTbemwq+2LjTViqbIPdWqisJ4WUWVLlqkUZnHLg3AZx1iIgAAXdm3DXUFK4Lv8TVSFwrjwGhfIFm+lyoMsmkK8KJw/RZRizgYkhyeYfoMDwI6jWgPycXEEd0VeVSLE7rqpxirDtXD2UJ5WZXJUrzqsVtld968TeNuF8awvtuphDcg4UxK2VpFHKuvZnMl1B3+GxUtfsc9j0kklLrDi93WrppEMG/0ZsR7lWpCVhU3OUq7+sxcOMZZ4uGnhLTwK6a/9ErLAQaB5EjBJyGWWtfFoksiXGabsUcNoWDck7YuKvrgUPjChJstZQAbJpQw6P7pnE3Yv1uFzNbeArHluKAdePsK1V3AgZC6f3MAZR1Bb8SmE26mC7bhVhonsJwkKWo1oOn3BpmeT0USk+hcpXVjlOEhGab4kq9CVwhOtanlGnbFzWFfDQJpTtTSQqcWk3tWM0MJ3nP8ppfDm48g7v1lEhlvqkz6lRYpKLSU27qOSMcJ65cllDZ6/Fs19h6VmjGWsz1YotDakF8ZbKM8nGPBpF+CNyujJrERhmXqnwMqhbOUhXuTrl6NCrJtxP2Wfsu1DYvQoN83OpUEVHIIbDq5MpiqgmdAWp9kuD9cjDNYKWoAISF0KbKfSSQrzp6YrJMBWWOI9n+dyJij3uSI8AHq51oVSv9VYBNV5sA2f5P8zhiPGdmy5iA5tKkI1LRDAmYIfRr6p9higp/OieyB6Ln1Hn1P5IKV6OTCgOI23NCWq8EOOTBhDH0+Gi1XKjFhxuuIOHvTASWPFhBH69gBbU/oQaltr0pR89WoejUUnn1xN7vNssgvgFgmdvxpygsM1InS2S3zBqfW0yVCY6TWyzFMsPzHg/Eql6cOlkSqxenBhuUbj/jHgDfai4gUsnTE7eRc9TCQnWyWBWLqlY8ZUaNMtVTJQf7afB5MKJaDrbd4aYyi0Wz9HpjKLsrIpiqiyBCiUoNqyrsRRIU5snZMlkUh8PlDFT2X+t+iwtvIf2NXL5NsWk5HnWqnOHAriaxaNOJ18pAhN9WHC2Ki5ZSTyW2M6gyxsFEhBK2yBr91hCM0zQ3RPrQI4IvjRtiXxq5z2+YAXL3Zuz8V/ej2dqc6jfZQ/oi4W1qYjBYxkKzVDZZWFBKSLruBtoEBNzIskh6OVGKm9YoodcV7A5HcyH74Qo5K92QFtWP8SYfltOnH91llizmotNOOIS0KSljiPVybDBgEqIGtds3MX6u/Ntj7sEH0KiJzVDbh0A6iJoGvknszfNTE5Ytbstr09tPcV5H2P8hjqhWU7mLsMkqIsX10OeL2rbrwO9/Xmj1BLIOqOFpBkvIr9V+e2Zd/2FctV6KCX9uoBmgxVtmUrhW9OIPvSV0LLV/cUHJVBV7vXskvlJfrNfLjBcWzgkMxXBuC59VglB81Xia4w1+Potep1GnTfewXRaapOmNdAycHMhdENg24U2ctXrKPliU7enDrXsdWB3u0IpTeKpxOk3Od3tSvcLPtjrDGQXDJoQLg6YAHbF9kbY44t9MhZz5nlJJ1psiD8jJPx2QnIP9kJndzfp8twd7zRXuVPl6oqvag3/Lh8USCgFv6Yiy1kS7b5Nw57se98xGIzIqBdVz/V2dYBOVX2/0ungcS0NlIWvI//Pgn8dGJDL2jx9Wljf8MadcCFflD3BIW2MRi1IJU12a2KQnD3GzE3sb24+02adzYU8iSqvhgHpzB21J5RRuGTAOnO7IZElZm61Bw1phj+IbBDS7NnHldYce8AjxXyjHpG/6MO+bVwYgCZRefH20RqU5WyBBkWe+B/vmxTAln4JalO369+ujwsEfLRUqD1w9sjN7x87FEE1YHYZ9QaL4nuVlgfG0YBAuiqRO77FibNgOfOV9Etj+ztDCyN0L7x0zaH/RoSeGVzBx+u07bv5lYMrRyD3ysOL5e657iA6uS8QA+SWEjTkOCAKvxc03IaImyML54QmRXoqaZ4gsKQyI9C8sQPtHONqTFRsl23cbXGJPEoL+XmjgbRYmWlOJVxJIbXwWHXws1/wLGrBAdNKWzjuJJmBcTYheaVY+DPSLWwQt/UmwzvN2PsleCIEZX/7uBmRvvAe9BVfchxJU40jnedFckLHMRatOe4gA+FFLybE/ASAjjHWeF40oyZLIJzQtAeRnV9z1F0pMRzlzgmGRzOvkyumJH6dJPg1WtIuKUR0g+pRW6rSZOn/NUpnVj59TTwQtZ/x0kMqq4rUa5kmlVyw2pUf/I1LR3vSBLNWWEv8VqUCJBLO4k1zZcu3bw1nalkDwcWdwZVevbU8zLDNBrqygamq4q7fMM7y4Dif9TTnFuGKB/gIr9uKmPf4OkWaCnNES4I2oVVyxx8/fSzY2zLt8A5f4Y4yMcgYNvuLd4XTfVVn64zSSSTwSwm9GA1mrAMTirJwMV3uznydzy63VQAML7PdrbvgtgE5MNtOsvAWyogEWYYxQYJtf82rXlg1wz4yK5SRZUSgB5am0tymNOprzmFesbMV8N/FIj9L2KFH+i/L6w6thioGmal92x+8Ar+MeUE182awSOepyiBVhtYOQ3AmSZGsO8W8EcbhnMjSeeY8pe5LleAiVPfIBpyWvmr0ih6GmfGKVfmqwsanS1AtV6pW818sSKgv/CXg7MzHnfY1JaH6RrK92XEHBD19h4hVM66avbJS4rFP+ysIy2Grc+4elXi7TekwihKskEdJcdTKIwZM+SZ+3glr7M496rYPVaycDUyvAXXudoTLOIBvdy9wrC/dn3R4cx87Yar1XWmXCpTCSStfN/hI49nlNnZ4I58RdvWMZ9C8N1szR0LBP1JKvTu/uZkfSzqSrvxJrSNYbrx3iXGNgWeNk94fK8p6VsJ1qwwX0hfi72DeXy/H+JMv8cL7fz6veEX7xxRdffPHFF1988cUXf4b98Xa77RbTxsmOHS/xIVU+ZX75Byly4974t4N5Q9JLBQE6XC+9gnenRkNIzfGze9woN9YUhYgmpDckHCzzAMtr0aODSUUW4aLgueeYYnOXZxLkp1Kh0X7+z6Bg2QEGKpWCgQbgniubJHmBUan4VOb58X7OSehl4UF/IhWerHEzOlueUS3JlFQI6wVetEL5l8vmmVKpiOQwSY0+9SKFSankSOYPwy1C20WH/XWpEP4AS1P4Nd5uUSWi8+ek3XYHWtk75VeFttugJKHq4y9CCMS/fg2D+VwqRN6cbRdlaZotOpqrSyXkn1LQvVwt1lwZ88ZdR4cfaF3xli4DoZ9LhfI10O9Fy0JCkwptv070CtECzFwgWlbGP9OhES/s6MgzWl6ANiaVeMsTKMcVBHOpVH43R4KcGCFCiSP0JFTdvV13gNBxDuT/Zez6V4dl5ekBnHn+/8gV2e2HhvR/foZcIGGZRdEZcpIFvAJmHDvhRsBMILRYohppL0FiLrqZdK5wwHoLloiK7Rc5la6tnFzG1Ma4v+LJ1nQIFavw4uT9VntWKAgMWiIfQleJ9tQ/9R6Iuhot4jTLc1WH99O0DequVVpqLa4pZw9irpCbxTV9hrTfA9OyKRI1Ue4h+ymYA0berasTj2dIpbNrSlZx2SwFpleOF7rsMXuClHOb/BAQPi3p++DtEryFNVbSCmWdvj1LKh3iC/TUWjYpWdggWpHLqJNHRdd0f229zZ1OfiEV0v/2Oal0OO0oL2ryZTGfhLTM9N0S1BthUtkKHKKA2ugyO/8PzZNK1FxSqp65VA7NRZJfiFi27xjds1D8FcqEJBVfVCrq86X7XapHciqVvXCBOXpSIT49e6EJ+VEcba5k+QkXjtjz7ZKLHRSpHDDzyRibuvfyNdhKJ8wGYbG39nGZXP3+nvk34m8xJJcW3qbZqqqEa6vFQvVtKQuUEJMKxLf6ZZmHZyoEaohJAR75hrj4rN5nR5TPuS+VC4JyBg/8QsbiBbN1XXwoQfP46X4miJiDH3ob70p65l1ZfcIRmgST8VAjRF7dfsaMSxsyMfHwwIna3zC+EA1Cmbusfqa8nc9pSfX6ov04TSq0a0i3NKgfioqkgCXFWiOUYFSJ/0K3kUHCXll+B1VdlGIfVEs3CMqlKmnYno5tvQ36npmtoeNmX3BDjGgJIh+SUwcQMMrZEQdecxDDbpH/kPTvOb3dVVpmo8mesB+GLpVNTm66dTduDY3fHtSSuAn91N43pE0ljaLcMHvwFVsKKWsqJwzLCX4A5YJQl7Z8310tfntow6lJ07QRu/74lqa9RM69O3QRBtztPh3VsKNHfkAPG8THlPzoooOTX3zxxRdffPHFF1+8Ef8HiaLEkg69+7oAAAAASUVORK5CYII="} alt="Face1" />
                    </div>

                    <div className="cubeSkillsFaces cubeSkillsFaces2">
                        <img src={"data:image/jpeg;base64,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"} alt="Face2" />
                    </div>

                    <div className="cubeSkillsFaces cubeSkillsFaces3">
                        <img src={"data:image/png;base64,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"} alt="Face3" />
                    </div>

                    <div className="cubeSkillsFaces cubeSkillsFaces4">
                        <img src={"data:image/png;base64,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"} alt="Face4" />
                    </div>

                    <div className="cubeSkillsFaces cubeSkillsFaces5">
                        <img src={"data:image/png;base64,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"} alt="Face5" />
                    </div>

                    <div className="cubeSkillsFaces cubeSkillsFaces6">
                        <img src={"data:image/png;base64,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"} alt="Face6" />
                    </div>
                </div>
                <div className="cubeShadow">
                </div>
                <div className="skillsBox" id="homeskillsBox">
                    <SiReact title="React.js"/>
                    <SiPython title="Python3"/>
                    <SiHtml5 title="HTML5"/>
                    <SiCss3 title="CSS3"/>
                    <SiJavascript title="JavaScript"/>
                    <SiMongodb title="MongoDB"/>
                    <SiExpress title="Express.js"/>
                    <SiNodedotjs title="Node.js"/>
                    <SiGit title="Git/Github"/>
                    <SiJira title="Jira"/>
                    <SiDjango title="Django"/>
                    <SiAnaconda title="Anaconda"/>
                    <SiFastapi title="FastAPI/RESTAPI"/>
                </div>
                <div className="skillsBox1" id="homeskillsBox">
                    <SiC title="C"/>
                    <SiCplusplus title='C++'/>
                    <SiThreedotjs title="Three.js"/>
                    <SiPostman title="POSTMAN"/>
                    <SiPostgresql title="Postgresql"/>
                    <SiLinux title="Linux/Ubuntu/Unix"/>
                    <SiFlutter title="Flutter"/>
                    <SiElasticsearch title="Elastic Search/Kibana"/>
                    <SiGitlab title="GitLab"/>
                    <SiBitbucket title="Bitbucket"/>
                    <SiAmazonaws title="AWS"/>
                    <SiOracle title="OracleSQL/MySQL/NoSQL/SQL Server/RDBMS"/>
                    <SiDocker title="Docker"/>
                    <SiAngular title="Angular"/>
                </div>
            </div>
            <div className="youtubeContainer">
                <Typography variant='h4' align='center'>
                        YOUTUBE VIDEOS
                </Typography>
                <div className="youtubeWrapper">
                        <YoutubeCard url={"https://www.youtube.com/embed/h6MJrEgxBb0"} title="My Introduction - Tell me About YourSelf" image={spaceImg}></YoutubeCard>
                        <YoutubeCard url={"https://www.youtube.com/embed/rj2u0EpcF8k"} title="My Introduction - Tell me About YourSelf" image={spaceImg}></YoutubeCard>
                        <YoutubeCard url={"https://youtube.com/embed/f2MkvrsNxwA"} title="My Introduction - Tell me About YourSelf" image={spaceImg}></YoutubeCard>
                        <YoutubeCard url={"https://www.youtube.com/embed/Wun6kmadNns"} title="My Introduction - Tell me About YourSelf" image={spaceImg}></YoutubeCard>
                </div>
            </div>
        </div>
    )
}

export default Home