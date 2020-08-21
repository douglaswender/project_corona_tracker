import React from 'react';
import { Grid } from '@material-ui/core';
import CardComponent from './Card/Card';

import styles from './Cards.module.css';

const Info = ({ data: { data, obitos, casosCurados, casosConfirmados } }) => {
  if (!data) {
    return 'Carregando...';
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infectados"
          value={casosConfirmados}
          lastUpdate={data}
          cardSubtitle="Número de casos encontrados."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Curados"
          value={casosCurados}
          lastUpdate={data}
          cardSubtitle="Número de casos curados."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Mortes"
          value={obitos}
          lastUpdate={data}
          cardSubtitle="Número de mortes causadas pelo COVID-19."
        />
      </Grid>
    </div>
  );
};
export default Info;
