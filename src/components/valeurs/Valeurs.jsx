import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import s from './valeurs.module.scss';
import Valeurcard1 from '../../components/valeurcard1/Valeurcard1'; 
import Valeurcard2 from '../../components/valeurcard2/Valeurcard2'; 
import Valeurcard3 from '../../components/valeurcard3/Valeurcard3'; 


const Valeurs = () => {

    
    return (
        <section className="container__main container__valeurs">
            <div className={s.content__valeurs_duo}>
                <Valeurcard1></Valeurcard1>
                <Valeurcard3></Valeurcard3>
            </div>
            <div className={s.content__valeurs_text_duo}>
                <div className={s.valeur_section_text}>
                    <h2><span>les valeurs</span> qui nous inspirent</h2>
                    <p className="light_blue_text">Chez Sunset Ramen, nous prenons les ramens très au sérieux. Nous croyons en l'authenticité, la qualité, et la communauté. Nos ramen sont préparés avec des ingrédients frais et locaux, pour vous offrir un goût qui vous transporte directement au Japon sans le décalage horaire. Nous voulons que chaque visiteur se sente comme chez lui, ou mieux encore, comme chez sa grand-mère japonaise (si elle en avait une). Et parce qu'on aime notre planète autant que nos ramen, nous adoptons des pratiques durables dans notre cuisine et nos opérations quotidiennes.</p>
                </div>
                <Valeurcard2></Valeurcard2>
            </div>
        </section>
    );
  };
  
  export default Valeurs;