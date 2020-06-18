import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { IonButtons, 
     IonContent, 
     IonHeader, 
     IonMenuButton, 
     IonPage, 
     IonTitle, 
     IonToolbar, 
     IonCard,
     IonCardHeader,
     IonCardSubtitle,
     IonCardTitle,
     IonCardContent,
     IonList,
     IonItem } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import data from './firstAidData.json';
import './FirstAid.css';

interface FirstAidDetailPageProps extends RouteComponentProps<{
     id: string;
   }> {}

const FirstAidDetails: React.FC<FirstAidDetailPageProps> = (match) => {
     const [FirstAidDetail, setFirstAidDetail] = useState<any>([]);

     useEffect(() => {
          console.log(`First aid detail for ${match.params.id}`)
          var result = data.filter(procedure => procedure.id === match.params.id)
          setFirstAidDetail(result)

        }, [])

     const { name } = useParams<{name: string;}>();
     return(
          <IonPage>
          <IonHeader>
          <IonToolbar color="primary">
               <IonButtons slot="start">
               <IonMenuButton />
               </IonButtons>
               <IonTitle>Emergency First Aid Procedures</IonTitle>
          </IonToolbar>
          </IonHeader>
          <IonContent>
          <IonHeader collapse="condense">
               <IonToolbar>
               <IonTitle size="large">{FirstAidDetail.procedure}</IonTitle>
               </IonToolbar>
          </IonHeader>
               <IonList>
                    {
                         data.map((firstAidProcedure, index)=>{
                              return (
                                   <IonItem>
                                        {firstAidProcedure.procedure}
                                   </IonItem>
                              )
                         })
                    }
               </IonList>
          </IonContent>

          
     </IonPage>
     );
}

export default FirstAidDetails;