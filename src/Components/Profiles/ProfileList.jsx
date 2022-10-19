import React, { useContext } from "react";
import { TableContext } from "../../Context/TableContext";
import { Link } from "react-router-dom";
import {
  No,
  Box,
  Paragraph1,
  Container,
  Heading,
  Paragraph,
  Span,
  Paragraph2,
  Button,
  Paragraph3,
  Paragraph4,
    Hr,
  Paragraph5
} from "./ProfileListStyles";
import "./ProfileList.css";
const ProfilesList = () => {
  const { tables } = useContext(TableContext);
  return (
    <div>
      {tables.length > 0 ? (
        <div>
          <Heading>Following is the list of your Profile:</Heading>
          <Container>
            {tables.map((tablee) => (
              <div key={tablee.id}>
                <Paragraph>
                  Name:
                  <Span>{tablee.name}</Span>
                </Paragraph>
                <Hr />
                <Paragraph>
                  Email:
                  <Span>{tablee.email}</Span>
                </Paragraph>
                <Hr />
                <Paragraph>
                  Phone Number:
                  <Span>{tablee.phoneNumber}</Span>
                </Paragraph>
                <Hr />
                <Paragraph>
                  DOB:
                  <Span>{tablee.dob}</Span>
                </Paragraph>
                <Hr />
                <Paragraph2>
                  Address:
                  <Paragraph4>
                    City:
                    {tablee.city}
                  </Paragraph4>
                  <Paragraph3>
                    District:
                    {tablee.district}
                  </Paragraph3>
                  <Paragraph3>
                    Province:
                    {tablee.province}
                  </Paragraph3>
                  <Paragraph3>
                    
                    Country:
                    {tablee.country}
                  </Paragraph3>
                </Paragraph2>
                <Hr />
                <div>
                  <Button>
                    <Link to={`/edits/${tablee.id}`} className="ln">
                      Edit
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </Container>
        </div>
      ) : (
        <No>
          <Box>
            <Paragraph1>Seems like there are no items in profile</Paragraph1>
          </Box>
        </No>
      )}
    </div>
  );
};

export default ProfilesList;
