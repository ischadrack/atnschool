import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1} className="content--carousel">
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
          className="d-block w-100"
          alt="..."
        />
        <MDBCarouselCaption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2} className="content--carousel">
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
          className="d-block img--carousel w-100"
          alt="..."
        />
        <MDBCarouselCaption>
          <h5>Second slide label</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            cumque quis dicta culpa. Quo autem sapiente similique aliquid
            consequatur quae, aliquam totam deleniti deserunt eos asperiores. Ab
            sunt odio suscipit rerum reprehenderit ex iusto pariatur minus,
            autem veniam officia corporis delectus quasi recusandae fugiat
            ratione voluptate praesentium accusantium quaerat voluptas? Cumque
            quasi tenetur incidunt perspiciatis, exercitationem nobis fugiat
            inventore esse et dolor repellendus nihil architecto sit quisquam
            officia? Explicabo voluptatibus ad, tempora itaque, atque magnam
            inventore, natus a voluptas minima iusto placeat veniam quod? Cumque
            maiores vel voluptatum adipisci vero repudiandae sunt consequatur
            neque esse enim quisquam, aliquam quos! Deleniti velit nisi
            consequuntur rem facilis fugit magnam ipsum, quis est magni culpa
            iste dolorum aut quos molestias! Sunt voluptates adipisci quidem
            maxime tempore ut necessitatibus repudiandae architecto illum,
            maiores animi temporibus possimus, reiciendis cupiditate ipsam nemo
            quos laborum rerum dolore ipsum sint unde aspernatur cum. Officiis,
            eum asperiores consectetur illum omnis et inventore quasi id quia
            quibusdam autem soluta commodi. Cupiditate dolorem aliquid ducimus
            tenetur saepe dolorum minus nulla ratione expedita. Totam id maiores
            quos praesentium sint culpa tenetur in. Illo accusamus eos beatae,
            assumenda veritatis, soluta placeat atque, dolorem consectetur quasi
            saepe quibusdam! Illum quis molestias et temporibus asperiores.{" "}
          </p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3} className="content--carousel">
        <img
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
          className="d-block w-100"
          alt="..."
        />
        <MDBCarouselCaption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
