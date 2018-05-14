import React from 'react';
import {PageHeader, Grid, Col, Row} from 'react-bootstrap';
import Card from '_components/Card/Card';
import {Block} from '_components/Grid/Grid';
import {SectionCard} from '_components/Page/Page';
import Showcase from '_containers/Showcase/Showcase_container';
import ContactForm from '_components/ContactForm/ContactForm';
import CustomerReview from '_components/CustomerReview/CustomerReview'
import ImageComponent from '_components/Image/Image';

const HomePage = props => {
  const {photos, about, showcasePhotos, reviews, flickrAssets} = props;
  const andre_photo = flickrAssets[about.owner.assetId];
  return (
    <div className="HomePage">
      <Showcase resolution="large" showCaption={false} fullWidth isResponsive/>
      <SectionCard title="Our Story" textAlign="center" separated titleAlign="center" icon="glyphicon glyphicon-book">
        <Grid>
          <Row>
            <Col xs={12} sm={6} md={6}>
              <Block mt={8} mb={8}>
                <ImageComponent withBorder src={andre_photo.src} height={andre_photo.height} width={andre_photo.width} />
              </Block>
            </Col>
            <Col xs={12} sm={6} md={6}>
              <p>{about.owner.background}</p>
            </Col>
          </Row>
        </Grid>
      </SectionCard>
      <SectionCard title={about.materials.title} titleAlign="center" separated textAlign="center" icon="glyphicon glyphicon-grain">
        <Grid>
          <Row>
            <Col xs={12}>
              <p style={{['marginBottom']: 16}}>{about.materials.description}</p>
            </Col>
            {about.materials.brands.map(brand => (
              <Col key={brand.name} xs={6} md={3}>
                <ImageComponent {...flickrAssets[brand.assetId]} fullWidth/>
              </Col>
            ))}
          </Row>
        </Grid>
      </SectionCard>
      <SectionCard title={about.services.title} titleAlign="center" separated textAlign="center" icon="glyphicon glyphicon-wrench">
        <Grid>
          <Row>
            <Col xs={12}>
              <p style={{['marginBottom']: 16}}>{about.services.description}</p>
            </Col>
            {about.services.categories.map(category => (
              <Col key={category.name} xs={12} sm={6} md={3}>
                <Block mt={8} mb={8}>
                  <Card image={<ImageComponent fullHeight {...flickrAssets[category.assetId]} />} target="/gallery">
                    {category.name}
                  </Card>
                </Block>
              </Col>
            ))}
          </Row>
        </Grid>
      </SectionCard>
      <SectionCard title="Testimonials" titleAlign="center" separated textAlign="left" icon="glyphicon glyphicon-user">
        <Grid>
          <Row>
            {reviews.map(review => (
              <Col key={review.id} xs={12} sm={6} md={3}>
                <CustomerReview  {...review}/>
              </Col>
            ))}
          </Row>
        </Grid>
      </SectionCard>
    </div>
  );
}

export default HomePage;