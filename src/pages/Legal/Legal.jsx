import React from 'react';
import s from './legal.module.scss';

const Legal = () => {
    return (
    <>
            <div className="container__main container__blue">
                 <div className={s.content_legal}>
                    <h1>mention légales</h1>
                    <div className={s.content_legal_text}>
                        <div className={s.bloc_legal_text}>
                            <p>Éditeur du Site</p>
                            <p>Le site internet Sunset Ramen https://www.sunsetramen.com est édité par :
                            Sunset Ramen Inc. 1410 Ocean Front Walk, Venice, CA 90291, États-Unis</p>
                        </div>
                        <div className={s.bloc_legal_text}>
                            <p>Téléphone</p>
                            <p>123 456-7890</p>
                        </div>
                        <div className={s.bloc_legal_text}>
                            <p>Email</p>
                            <p>contact@sunsetramen.com</p>
                        </div>
                        <div className={s.bloc_legal_text}>
                            <p>Directeur de la publication</p>
                            <p>Hiroshi Tanaka, CEO de Sunset Ramen Inc.</p>
                        </div>
                        <div className={s.bloc_legal_text}>
                            <p>Hébergement</p>
                            <p>Le site Sunset Ramen est hébergé par :
                            OVH : 2, rue Kellermann, 59100 Roubaix</p>
                        </div>
                        <div className={s.bloc_legal_text}>
                            <p>Propriété Intellectuelle</p>
                            <p>Tous les contenus présents sur le site Sunset Ramen, y compris, sans s'y limiter, les textes, images, graphismes, logos, vidéos, et icônes, sont la propriété exclusive de Sunset Ramen Inc. ou de ses partenaires. Toute reproduction, représentation, modification, publication, transmission, ou dénaturation, totale ou partielle, du contenu de ce site, par quelque procédé que ce soit, et sur quelque support que ce soit, est interdite sans l'autorisation écrite préalable de Sunset Ramen Inc.
Protection des Données Personnelles
Sunset Ramen s'engage à protéger la vie privée des utilisateurs de son site web et la confidentialité de leurs données personnelles. Les informations recueillies sur le site sont utilisées uniquement dans le cadre de la gestion des demandes et des commandes, et ne sont en aucun cas transmises à des tiers sans le consentement préalable des utilisateurs.
Conformément au Règlement Général sur la Protection des Données RGPD, vous disposez d'un droit d'accès, de rectification, d'opposition, de suppression, et de portabilité de vos données personnelles. Pour exercer ces droits, vous pouvez nous contacter par email à l'adresse : privacy@sunsetramen.com.</p>
                        </div>
                        <div className={s.bloc_legal_text}>
                            <p>Limitation de Responsabilité</p>
                            <p>Sunset Ramen Inc. s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, et se réserve le droit de corriger, à tout moment et sans préavis, le contenu. Toutefois, Sunset Ramen Inc. ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site. En conséquence, Sunset Ramen Inc. décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site.</p>
                        </div>
                        <div className={s.bloc_legal_text}>
                            <p>Liens Hypertextes</p>
                            <p>Le site Sunset Ramen peut contenir des liens hypertextes vers d'autres sites. Sunset Ramen Inc. n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu. L'insertion de ces liens ne signifie pas que Sunset Ramen approuve les éléments contenus sur ces sites.
Droit Applicable
Les présentes mentions légales sont régies par la loi américaine. Tout litige ou contestation concernant l'utilisation du site Sunset Ramen sera soumis à la compétence exclusive des tribunaux de Los Angeles, Californie.</p>
                        </div>
                        <div className={s.bloc_legal_text}>
                            <p>Contact</p>
                            <p>Le site internet Sunset Ramen https://www.sunsetramen.com est édité par :
                            Sunset Ramen Inc. 1410 Ocean Front Walk, Venice, CA 90291, États-Unis</p>
                        </div>

                    </div>
                 </div>
            </div>
     </>
    );
  };
  
  export default Legal;