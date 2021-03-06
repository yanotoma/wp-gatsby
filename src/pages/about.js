import React from 'react';
import PageTitle from '../components/PageTitle';
import ContainerLayout from '../layouts/ContainerLayout';

const AboutPage = () => {
  return (
    <ContainerLayout>
      <PageTitle>About</PageTitle>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at
        porttitor nulla. Cras suscipit egestas finibus. Etiam iaculis dui vitae
        libero blandit porttitor. Maecenas consectetur mi ut egestas tristique.
        Pellentesque fringilla sapien ultricies tincidunt maximus. Suspendisse
        feugiat sit amet lacus iaculis lacinia. Donec aliquam leo laoreet,
        gravida tortor eget, condimentum sem. Aliquam consequat arcu ac lectus
        pulvinar euismod. Integer pulvinar odio vestibulum tortor vestibulum,
        sed egestas massa dictum. Phasellus faucibus, erat ut tincidunt
        vulputate, nibh augue euismod nibh, dictum vestibulum erat massa ac
        libero.
      </p>
    </ContainerLayout>
  );
};

export default AboutPage;
