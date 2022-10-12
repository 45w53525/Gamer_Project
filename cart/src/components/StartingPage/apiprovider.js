import { useState, useEffect, Component } from "react";
import axios from "axios";
import React from 'react'
import Apicontext from "./Apicontext";
import { Fragment } from "react";
import Cardctx from "./Cardctx";


const options = {
    method: 'GET',
    url: 'https://videogames-news2.p.rapidapi.com/videogames_news/search_news',
    params: { query: 'overwatch' },
    headers: {
        'X-RapidAPI-Key': '7a287d1dcbmsh99cddb8c73e63e3p18e3ccjsn11199f8dfaf5',
        'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com'
    }
};


export const Apiprovider = (props) => {

    const [Gametitle, setgame] = useState();
    const [Description, setdes] = useState();
    const [link, setlink] = useState();
    const [img, setimage] = useState();

    const [Gametitle2, setgame2] = useState();
    const [Description2, setdes2] = useState();
    const [link2, setlink2] = useState();
    const [img2, setimage2] = useState();

    const [Gametitle3, setgame3] = useState();
    const [Description3, setdes3] = useState();
    const [link3, setlink3] = useState();
    const [img3, setimage3] = useState();

    const [Gametitle4, setgame4] = useState();
    const [Description4, setdes4] = useState();
    const [link4, setlink4] = useState();
    const [img4, setimage4] = useState();

    const [Gametitle5, setgame5] = useState();
    const [Description5, setdes5] = useState();
    const [link5, setlink5] = useState();
    const [img5, setimage5] = useState();


    const [Gametitle6, setgame6] = useState();
    const [Description6, setdes6] = useState();
    const [link6, setlink6] = useState();
    const [img6, setimage6] = useState();


    const [Gametitle7, setgame7] = useState();
    const [Description7, setdes7] = useState();
    const [link7, setlink7] = useState();
    const [img7, setimage7] = useState();






    useEffect(() => {
        axios.request(options).then(function (response) {

            setgame((response.data[8]).title)
            setdes((response.data[8]).description)
            setimage((response.data[8]).image)
            setlink((response.data[8]).link)

            setgame2((response.data[7]).title)
            setdes2((response.data[7]).description)
            setimage2((response.data[7]).image)
            setlink2((response.data[7]).link)

            setgame3((response.data[1]).title)
            setdes3((response.data[1]).description)
            setimage3((response.data[1]).image)
            setlink3((response.data[1]).link)

            setgame4((response.data[4]).title)
            setdes4((response.data[4]).description)
            setimage4((response.data[4]).image)
            setlink4((response.data[4]).link)

            setgame5((response.data[9]).title)
            setdes5((response.data[9]).description)
            setimage5((response.data[9]).image)
            setlink5((response.data[9]).link)

            setgame6((response.data[5]).title)
            setdes6((response.data[5]).description)
            setimage6((response.data[5]).image)
            setlink6((response.data[5]).link)

            setgame7((response.data[2]).title)
            setdes7((response.data[2]).description)
            setimage7((response.data[2]).image)
            setlink7((response.data[2]).link)

        }).catch(function (error) {
            console.error(error);
        });

    }, []);









    return (
        <div>


            <Apicontext.Provider value={{
                Gametitle, setgame,
                Description, setdes,
                link, setlink, img,
                setimage, Gametitle2,
                setgame2, Description2,
                setdes2, link2, setlink2,
                img2, setimage2,
                Gametitle3, setgame3,
                Description3, setdes3,
                link3, setlink3,
                img3, setimage3,
                Gametitle4, setgame4,
                Description4, setdes4,
                link4, setlink4,
                img4, setimage4,
                Gametitle5, setgame5,
                Description5, setdes5,
                link5, setlink5,
                img5, setimage5,
                Gametitle6, setgame6,
                Description6, setdes6,
                link6, setlink6,
                img6, setimage6,
                Gametitle7, setgame7,
                Description7, setdes7,
                link7, setlink7,
                img7, setimage7
            }} >

                {props.children}

            </Apicontext.Provider>


        </div>






    )



};



export default Apiprovider;