import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import { Avatar, Button, Typography } from "@mui/material";
import { Formik } from "formik";
import { initialValues, validationSchema } from "../../src/misc/validation";
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { FieldArray } from "formik";
import { Field } from "formik";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function UserAccount(props) {
  const companyLogoRef = useRef(null);

  const triggerFileUpload = () => {

    console.log('companyLogoRef:', companyLogoRef)
    companyLogoRef.current.click();
  }

  const [state, setState] = useState({
    status_message: {
      type: "success",
      message: "",
    },
  });

  const { status_message } = state;
  const [value, setValue] = React.useState<Date | null>(
    new Date(),
  );

  const handleDateChange = (newValue: Date | null) => {
    setValue(newValue);
  };
  return <div>

    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values,) => {
        console.log('values:', values);
      }
      }
    // onSubmit={async (values, actions) => {
    // const res = await submit_auth(authType, values, navigate, searchParams);
    // if (res.data) {
    //   setState({
    //     ...state,
    //     status_message: {
    //       type: "success",
    //       message: res.data.message,
    //     },
    //   });
    // } else {
    //   let { message, errors } = res.response.data;

    //   // for (const property in errors) {
    //   console.log(`${property}: ${errors[property]}`);
    //   // message = message + ` ${property}: ${errors[property]}`
    //   message = message + ` ${errors[property]}`;
    // }

    // setState({
    //   ...state,
    //   status_message: {
    //     type: "error",
    //     message,
    //   },
    // });
    // }
    // }
    // }
    >
      {(props) => {

        console.log('props:', props)
        return (
          <form className="profile-form" onSubmit={props.handleSubmit}>
            <h1 className="text-center auth-title">
              Aman Ullah
            </h1>
            <LocalizationProvider dateAdapter={AdapterMoment}>


              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                <Grid item xs={12}>
                  <Item>
                    <div className="avatar">
                      <div className="icon">
                        <EditIcon
                          viewBox="-8 -5 40 40"
                        // fontSize="large" 
                        />
                      </div>
                      <Avatar
                        sx={{ width: 120, height: 120 }}
                        alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <TextField
                      fullWidth
                      variant="outlined"
                      id="name"
                      name="name"
                      label="Name"
                      value={props.values.name}
                      onChange={props.handleDateChange}
                      error={
                        props.touched.name && Boolean(props.errors.name)
                      }
                      helperText={props.touched.name && props.errors.name}
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <TextField
                      fullWidth
                      type="number"
                      variant="outlined"
                      id="age"
                      name="age"
                      label="Age"
                      value={props.values.age}
                      onChange={props.handleChange}
                      error={
                        props.touched.age && Boolean(props.errors.age)
                      }
                      helperText={props.touched.age && props.errors.age}
                    />
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                    <Typography variant="h5" gutterBottom component="div">
                      Work experiences
                    </Typography>
                    <FieldArray
                      name="workExperiences"
                      render={arrayHelpers => (
                        <div>
                          {props.values.workExperiences && props.values.workExperiences.length > 0 ? (
                            props.values.workExperiences.map((workExperience, index) => (
                              <div key={index}>
                                {/* <TextField label="Start Date" variant="outlined"
                                  value={props.values.workExperiences[index].startDate}
                                  onChange={props.handleChange}
                                  error={
                                    props.touched.age && Boolean(props.errors.age)
                                  }
                                  helperText={props.values.workExperiences[index].startDate && props.errors.workExperiences[index].startDate}
                                  name={`workExperiences.${index}.startDate`}
                                   /> */}

                                <DesktopDatePicker
                                  label="Start Date"
                                  inputFormat="YYYY/MM/DD"
                                  value={value}
                                  onChange={(date) => {
                                    handleDateChange(date);
                                  }}
                                  renderInput={(params) => <TextField {...params}
                                    error={
                                      props.touched.age && Boolean(props.errors.age)
                                    }
                                    helperText={props.values.workExperiences[index].startDate && props.errors.workExperiences[index].startDate}
                                    name={`workExperiences.${index}.startDate`}

                                  />}
                                />
                                <TextField label="End Date" variant="outlined"
                                  value={props.values.workExperiences[index].endDate}
                                  onChange={props.handleChange}
                                  error={
                                    props.touched.age && Boolean(props.errors.age)
                                  }
                                  helperText={props.values.workExperiences[index].endDate && props.errors.workExperiences[index].endDate}
                                  name={`workExperiences.${index}.endDate`} />
                                <TextField label="Job title" variant="outlined"
                                  value={props.values.workExperiences[index].jobTitle}
                                  onChange={props.handleChange}
                                  error={
                                    props.touched.age && Boolean(props.errors.age)
                                  }
                                  helperText={props.values.workExperiences[index].jobTitle && props.errors.workExperiences[index].jobTitle}
                                  name={`workExperiences.${index}.jobTitle`} />
                                <TextField label="Company" variant="outlined"
                                  value={props.values.workExperiences[index].company}
                                  onChange={props.handleChange}
                                  error={
                                    props.touched.age && Boolean(props.errors.age)
                                  }
                                  helperText={props.values.workExperiences[index].company && props.errors.workExperiences[index].company}
                                  name={`workExperiences.${index}.company`} />


                                <TextField label="Job description" variant="outlined"
                                  value={props.values.workExperiences[index].jobDescription}
                                  onChange={props.handleChange}
                                  error={
                                    props.touched.age && Boolean(props.errors.age)
                                  }
                                  helperText={props.values.workExperiences[index].jobDescription && props.errors.workExperiences[index].jobDescription}
                                  name={`workExperiences.${index}.jobDescription`} />


                                <input id={"file" + index}
                                  name={`workExperiences.${index}.companyLogo`}
                                  hidden
                                  ref={companyLogoRef}
                                  type="file" onChange={(event) => {
                                    props.setFieldValue(`workExperiences.${index}.companyLogo`, event.currentTarget.files[0]);
                                  }}
                                />
                                <Button variant="contained" color="primary" onClick={() => { triggerFileUpload() }}>
                                  Company Logo
                                </Button>


                                <Thumb file={props.values.workExperiences[index].companyLogo} />
                                <Button
                                  variant="outlined"
                                  onClick={() => arrayHelpers.remove(index)} // remove a workExperience from the list
                                >
                                  -
                                </Button>
                                <Button
                                  variant="outlined"
                                  onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                                >
                                  +
                                </Button>
                              </div>
                            ))
                          ) : (
                            <Button type="button" onClick={() => arrayHelpers.push('')}>
                              {/* show this when user has removed all workExperiences from the list */}
                              Add a workExperience
                            </Button>
                          )}
                          <div>
                            <Button variant="contained" className="mt-xs-20" type="submit">Submit</Button>
                          </div>
                        </div>
                      )}
                    />

                  </Item>
                  <Item>

                  </Item>
                </Grid>

              </Grid>
            </LocalizationProvider>
          </form>
        )
      }
      }
    </Formik >
  </div >
}



class Thumb extends React.Component {
  state = {
    loading: false,
    thumb: undefined,
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!nextProps.file) { return; }

    this.setState({ loading: true }, () => {
      const reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };

      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    console.log(this.props)
    const { file } = this.props;
    const { loading, thumb } = this.state;

    if (!file) { return null; }

    if (loading) { return <p>loading...</p>; }

    return (<img src={thumb}
      alt={file.name}
      className="img-thumbnail mt-2"
      height={200}
      width={200} />);
  }
}