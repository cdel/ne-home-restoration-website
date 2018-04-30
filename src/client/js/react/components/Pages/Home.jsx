import React from 'react';
import {PageHeader, Grid, Col, Row} from 'react-bootstrap';
import {SectionCard} from '_components/Page/Page';
import Slideshow from '_components/Slideshow/Slideshow';
import ContactForm from '_components/ContactForm/ContactForm';
import ImageComponent from '_components/Image/Image';

const showCaseHeight = 400;
const ANDRE_PHOTO = 'assets/ne-home-restoration-owner.png';
const brands = [
  {
    src: 'assets/brands/buildclean_dust_brand.png',
    name: 'BuildClean Dust Control HEPA'
  },
  {
    src: 'assets/brands/edgewood_brand.png',
    name: 'Edgewood Brand'
  },
  {
    src: 'assets/brands/kohler_brand.png',
    name: 'Kohler Fixtures'
  },
  {
    src: 'assets/brands/wedi_brand.png',
    name: 'Wedi Remodeling Brand'
  }
];

const HomePage = props => {
  const {photos, about, stockPhotos} = props;
  return (
    <div className="HomePage">
      <Slideshow photos={photos} showCaption={false} height={showCaseHeight} />
      <SectionCard title="Our Story" textAlign="center" separated titleAlign="center" icon="glyphicon glyphicon-book">
        <Grid>
          <Row>
            <Col xs={12} sm={6} md={6}>
              <ImageComponent src={ANDRE_PHOTO} />
            </Col>
            <Col xs={12} sm={6} md={6}>
              <p>{about.company.background}</p>
            </Col>
          </Row>
        </Grid>
      </SectionCard>
      <SectionCard title="Trusted Brands" titleAlign="center" separated textAlign="center" icon="glyphicon glyphicon-book">
        <Grid>
          <Row>
            {brands.map(brand => (
              <Col key={brand.name} xs={6} md={3}>
                <ImageComponent src={brand.src} alt={brand.name} />
              </Col>
            ))}
          </Row>
        </Grid>
      </SectionCard>
    </div>
  );
}

export default HomePage;