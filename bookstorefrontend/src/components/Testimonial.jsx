import React from "react";
import test1 from "../assets/images/testimonials-image.png";
import test2 from "../assets/images/testimonials-image02.png";
import test3 from "../assets/images/testimonials-image03.png";
import test4 from "../assets/images/testimonials-image04.png";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function Testimonial() {
  return (
    <div className="bg-[#fcebe6]">
      <div className="container-main py-[8%] sm:px-4 md:px-4 gap-[55px] flex-col lg:flex-row px-4">
        <div className="left-testimonials flex-auto justify-center items-center">
          <p className="text-4xl leading-[170%] font-bold mb-5">
            What Readers <br /> Are Saying
          </p>
          <p className="text-gray-800 mb-5 text-justify">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu{" "}
            santium doloremque lauda ntium.
          </p>
          <Button
            color="gray"
            className="text-white bg-[#946659] text-sm rounded-md mb-3 uppercase"
          >
            Read All
          </Button>
        </div>
        <div className="right-testimonials grid grid-cols-1 lg:grid-cols-2 gap-6 flex-2 justify-center items-center">
          <Card className="max-w-[500px]">
            <CardBody>
              <Typography>
                Justo vestibulum risus imperdiet consectetur consectetur pretium
                urna augue etiam risus accum san volutpat urna, eusem per enim,
                est aliquam laoet urna fringilla viverra.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <div className="flex items-center gap-2 mt-4">
                <img src={test1} alt="" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold">Mike Sendler</p>
                  <p className="text-xs text-gray-600">Review on Book 1</p>
                </div>
              </div>
            </CardFooter>
          </Card>

          <Card className="max-w-[500px]">
            <CardBody>
              <Typography>
                Justo vestibulum risus imperdiet consectetur consectetur pretium
                urna augue etiam risus accum san volutpat urna, eusem per enim,
                est aliquam laoet urna fringilla viverra.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <div className="flex items-center gap-2 mt-4">
                <img src={test2} alt="" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold">Shanna Margolis</p>
                  <p className="text-xs text-gray-600">Review on Book 1</p>
                </div>
              </div>
            </CardFooter>
          </Card>

          <Card className="max-w-[500px]">
            <CardBody>
              <Typography>
                Justo vestibulum risus imperdiet consectetur consectetur pretium
                urna augue etiam risus accum san volutpat urna, eusem per enim,
                est aliquam laoet urna fringilla viverra.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <div className="flex items-center gap-2 mt-4">
                <img src={test3} alt="" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold">Charmaine Tobey</p>
                  <p className="text-xs text-gray-600">Review on Book 1</p>
                </div>
              </div>
            </CardFooter>
          </Card>

          <Card className="max-w-[500px]">
            <CardBody>
              <Typography>
                Justo vestibulum risus imperdiet consectetur consectetur pretium
                urna augue etiam risus accum san volutpat urna, eusem per enim,
                est aliquam laoet urna fringilla viverra.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <div className="flex items-center gap-2 mt-4">
                <img src={test4} alt="" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold">Delmar Byers</p>
                  <p className="text-xs text-gray-600">Review on Book 1</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
