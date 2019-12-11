'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var MUI = require('@material-ui/core');
var PropTypes = _interopDefault(require('prop-types'));
var MUIIcons = require('@material-ui/icons');

var useStyles = MUI.makeStyles(function (theme) {
  return {
    signUpContainer: {
      display: 'flex',
      height: '100%'
    },
    '@media only screen and (max-width: 768px)': {
      signUpContainer: {
        flexDirection: 'column'
      }
    }
  };
});

var SignUpContainer = function SignUpContainer(props) {
  var children = props.children;
  var classes = useStyles();
  return React.createElement("div", {
    className: classes.signUpContainer
  }, children);
};

var useStyles$1 = MUI.makeStyles(function (theme) {
  return {
    signUpFlexArea: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  };
});

var SignUpFlexArea = function SignUpFlexArea(props) {
  var classes = useStyles$1();
  var children = props.children;
  return React.createElement("div", {
    className: classes.signUpFlexArea
  }, children);
};

var useStyles$2 = MUI.makeStyles(function (theme) {
  return {
    brandingContainer: {
      width: "50%",
      minWidth: 450
    }
  };
});

var BrandingContainer = function BrandingContainer(props) {
  var classes = useStyles$2();
  var children = props.children;
  return React.createElement("div", {
    className: classes.brandingContainer
  }, children);
};

var BrandingTitle = function BrandingTitle(props) {
  return React.createElement(MUI.Typography, {
    align: "center",
    variant: "h1"
  }, "BloomTrac");
};

var useStyles$3 = MUI.makeStyles(function (theme) {
  return {
    brandingTexts: {
      marginTop: "1.5em"
    }
  };
});

var BrandingTexts = function BrandingTexts(props) {
  var classes = useStyles$3();
  return React.createElement(MUI.Typography, {
    className: classes.brandingTexts,
    align: "center"
  }, "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.");
};

var Branding = function Branding(props) {
  return React.createElement(SignUpFlexArea, null, React.createElement(BrandingContainer, null, React.createElement(BrandingTitle, null), React.createElement(BrandingTexts, null)));
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var useStyles$4 = MUI.makeStyles(function (theme) {
  return {
    signUpFormContainer: {
      width: '50%',
      padding: '1.5em',
      maxWidth: '450px'
    }
  };
});

var SignUpFormContainer = function SignUpFormContainer(props) {
  var children = props.children;
  var classes = useStyles$4();
  return React.createElement(MUI.Paper, {
    className: classes.signUpFormContainer,
    elevation: 3
  }, children);
};

var SignUpFormTitle = function SignUpFormTitle(props) {
  return React.createElement(MUI.Typography, {
    align: "center",
    variant: "h4"
  }, "Sign Up");
};

var FormControlsCreateLoginForward = function FormControlsCreateLoginForward(props) {
  var _onClick = props.onClick,
      disabled = props.disabled;
  return React.createElement(MUI.Button, {
    disabled: disabled,
    onClick: function onClick() {
      _onClick("CreateCompany");
    },
    variant: "contained",
    color: "primary"
  }, "NEXT");
};

var FormControlsCreateLoginForward$1 = function FormControlsCreateLoginForward(props) {
  var _onClick = props.onClick,
      disabled = props.disabled;
  return React.createElement(MUI.Button, {
    disabled: disabled,
    onClick: function onClick() {
      return _onClick();
    },
    variant: "contained",
    color: "primary"
  }, "SIGN UP");
};

var FormControlsForwardButton = function FormControlsForwardButton(props) {
  var currentForm = props.currentForm,
      onNextClick = props.onNextClick,
      onSignUpClick = props.onSignUpClick,
      nextDisabled = props.nextDisabled,
      signUpDisabled = props.signUpDisabled;

  if (currentForm === "CreateLogin") {
    return React.createElement(FormControlsCreateLoginForward, {
      onClick: onNextClick,
      disabled: nextDisabled
    });
  } else if (currentForm === "CreateCompany") {
    return React.createElement(FormControlsCreateLoginForward$1, {
      onClick: onSignUpClick,
      disabled: signUpDisabled
    });
  } else {
    return null;
  }
};

var useStyles$5 = MUI.makeStyles(function (theme) {
  return {
    formControlsView: {
      display: "flex",
      justifyContent: "space-between"
    }
  };
});

var FormControlsView = function FormControlsView(props) {
  var classes = useStyles$5();
  var onNextClick = props.onNextClick,
      onBack = props.onBack,
      currentForm = props.currentForm,
      nextDisabled = props.nextDisabled,
      signUpDisabled = props.signUpDisabled,
      onSignUpClick = props.onSignUpClick;
  return React.createElement("div", {
    className: classes.formControlsView
  }, React.createElement(MUI.Button, {
    onClick: function onClick() {
      if (currentForm === "CreateCompany") {
        onBack("CreateLogin");
      }
    },
    variant: "outlined"
  }, "BACK"), React.createElement(FormControlsForwardButton, {
    nextDisabled: nextDisabled,
    signUpDisabled: signUpDisabled,
    onNextClick: onNextClick,
    currentForm: currentForm,
    onSignUpClick: onSignUpClick
  }));
};

var FormControls = function FormControls(props) {
  return React.createElement(FormControlsView, props);
};

var onTextChange = function onTextChange(_ref) {
  var text = _ref.text,
      validation = _ref.validation,
      setError = _ref.setError;

  if (!validation(text)) {
    setError(true);
  } else {
    setError(false);
  }
};

var useStyles$6 = MUI.makeStyles(function (theme) {
  return {
    textField: {
      marginTop: "0.8em"
    }
  };
});

var SignUpFormTextField = function SignUpFormTextField(props) {
  var label = props.label,
      validation = props.validation,
      errorText = props.errorText,
      onValidationUpdate = props.onValidationUpdate,
      type = props.type,
      _onChange = props.onChange,
      dataTestId = props.dataTestId,
      value = props.value;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      error = _React$useState2[0],
      setError = _React$useState2[1];

  var classes = useStyles$6();
  React.useEffect(function () {
    onTextChange({
      text: value,
      validation: validation,
      setError: setError
    });
  }, [setError, validation, value]);
  React.useEffect(function () {
    if (onValidationUpdate) {
      onValidationUpdate(!error && value.length > 0);
    }
  }, [error, onValidationUpdate, value]);
  return React.createElement(MUI.TextField, {
    error: error,
    type: type,
    helperText: error ? errorText : "",
    className: classes.textField,
    fullWidth: true,
    variant: "outlined",
    label: label,
    onChange: function onChange(e) {
      _onChange(e.target.value);
    },
    inputProps: {
      "data-testid": dataTestId
    }
  });
};

SignUpFormTextField.propTypes = {
  validation: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

var useStyles$7 = MUI.makeStyles(function (theme) {
  return {
    signUpFormFieldsContainer: {
      visibility: function visibility(props) {
        return props.open ? "visible" : "hidden";
      },
      opacity: function opacity(props) {
        return props.open ? 1 : 0;
      },
      position: "absolute",
      top: 0,
      left: 0,
      transition: "visibility 0.3s ease-in, opacity 0.3s ease-in",
      width: "100%"
    }
  };
});

var SignUpFormFieldsContainer = function SignUpFormFieldsContainer(props) {
  var children = props.children,
      open = props.open;
  var classes = useStyles$7({
    open: open
  });
  return React.createElement("div", {
    className: classes.signUpFormFieldsContainer
  }, children);
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\b\x0B\f\x0E-\x1F!#-[]-\x7F]|\\[\x01-\t\x0B\f\x0E-\x7F])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])).){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\b\x0B\f\x0E-\x1F!-ZS-\x7F]|\\[\x01-\t\x0B\f\x0E-\x7F])+)])"], ["(?:[a-z0-9!#$%&'*+/=?^_\\`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_\\`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var validateEmail = function validateEmail(email) {
  if (email === "") {
    return true;
  }

  var emailRegex = new RegExp(String.raw(_templateObject()));
  var result = emailRegex.exec(email);

  if (result && result.length > 0) {
    return true;
  } else {
    return false;
  }
};

var validatePassword = function validatePassword(password) {
  if (password === "") return true;
  return password.length > 4;
};

var CreateLoginView = function CreateLoginView(props) {
  var open = props.open,
      onUpdate = props.onUpdate,
      formState = props.formState,
      setFormState = props.setFormState;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      emailValid = _React$useState2[0],
      setEmailValid = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      passwordValid = _React$useState4[0],
      setPasswordValid = _React$useState4[1];

  React.useEffect(function () {
    onUpdate(emailValid && passwordValid);
  }, [emailValid, onUpdate, passwordValid]);
  return React.createElement(SignUpFormFieldsContainer, {
    open: open
  }, React.createElement(SignUpFormTextField, {
    dataTestId: "email-field",
    validation: validateEmail,
    label: "Email",
    errorText: "Invalid email",
    onValidationUpdate: function onValidationUpdate(valid) {
      setEmailValid(valid);
    },
    onChange: function onChange(value) {
      setFormState(_objectSpread2({}, formState, {
        email: value
      }));
    },
    value: formState.email
  }), React.createElement(SignUpFormTextField, {
    dataTestId: "password-field",
    validation: validatePassword,
    label: "Password",
    errorText: "Password must be at least 4 characters long",
    onValidationUpdate: function onValidationUpdate(valid) {
      return setPasswordValid(valid);
    },
    value: formState.password,
    onChange: function onChange(value) {
      setFormState(_objectSpread2({}, formState, {
        password: value
      }));
    }
  }));
};

var CreateLogin = function CreateLogin(props) {
  var open = props.open,
      onUpdate = props.onUpdate,
      setFormState = props.setFormState,
      formState = props.formState;
  return React.createElement(CreateLoginView, {
    open: open,
    setFormState: setFormState,
    onUpdate: onUpdate,
    formState: formState
  });
};

var validateGeneral = function validateGeneral(value) {
  if (value === "") return true;
  return value.length > 0;
};

var CreateCompanyView = function CreateCompanyView(props) {
  var open = props.open,
      onUpdate = props.onUpdate,
      formState = props.formState,
      setFormState = props.setFormState;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      validFirstName = _React$useState2[0],
      setValidFirstName = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      validLastName = _React$useState4[0],
      setValidLastName = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      validCompanyName = _React$useState6[0],
      setValidCompanyName = _React$useState6[1];

  var _React$useState7 = React.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      validWebsite = _React$useState8[0],
      setValidWebsite = _React$useState8[1];

  var _React$useState9 = React.useState(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      validPhoneNumber = _React$useState10[0],
      setValidPhoneNumber = _React$useState10[1];

  React.useEffect(function () {
    if (onUpdate) {
      onUpdate(validFirstName && validLastName && validCompanyName && validWebsite && validPhoneNumber);
    }
  }, [validFirstName, validLastName, validCompanyName, validWebsite, validPhoneNumber, onUpdate]);
  return React.createElement(SignUpFormFieldsContainer, {
    open: open
  }, React.createElement(SignUpFormTextField, {
    dataTestId: "first-name-field",
    validation: validateGeneral,
    onValidationUpdate: function onValidationUpdate(valid) {
      return setValidFirstName(valid);
    },
    label: "First Name",
    value: formState.firstName,
    onChange: function onChange(value) {
      return setFormState(_objectSpread2({}, formState, {
        firstName: value
      }));
    }
  }), React.createElement(SignUpFormTextField, {
    dataTestId: "last-name-field",
    validation: validateGeneral,
    onValidationUpdate: function onValidationUpdate(valid) {
      return setValidLastName(valid);
    },
    label: "Last Name",
    value: formState.lastName,
    onChange: function onChange(value) {
      return setFormState(_objectSpread2({}, formState, {
        lastName: value
      }));
    }
  }), React.createElement(SignUpFormTextField, {
    dataTestId: "company-name-field",
    validation: validateGeneral,
    onValidationUpdate: function onValidationUpdate(valid) {
      return setValidCompanyName(valid);
    },
    label: "Company Name",
    value: formState.companyName,
    onChange: function onChange(value) {
      return setFormState(_objectSpread2({}, formState, {
        companyName: value
      }));
    }
  }), React.createElement(SignUpFormTextField, {
    dataTestId: "website-field",
    validation: validateGeneral,
    onValidationUpdate: function onValidationUpdate(valid) {
      return setValidWebsite(valid);
    },
    label: "Website",
    value: formState.website,
    onChange: function onChange(value) {
      return setFormState(_objectSpread2({}, formState, {
        website: value
      }));
    }
  }), React.createElement(SignUpFormTextField, {
    dataTestId: "phone-number-field",
    validation: validateGeneral,
    onValidationUpdate: function onValidationUpdate(valid) {
      return setValidPhoneNumber(valid);
    },
    label: "Phone Number",
    value: formState.phoneNumber,
    onChange: function onChange(value) {
      return setFormState(_objectSpread2({}, formState, {
        phoneNumber: value
      }));
    }
  }));
};

var CreateCompany = function CreateCompany(props) {
  var open = props.open,
      onUpdate = props.onUpdate,
      formState = props.formState,
      setFormState = props.setFormState;
  return React.createElement(CreateCompanyView, {
    formState: formState,
    setFormState: setFormState,
    open: open,
    onUpdate: onUpdate
  });
};

var useStyles$8 = MUI.makeStyles(function (theme) {
  return {
    formsContainer: {
      position: "relative",
      height: 350
    }
  };
});

var Forms = function Forms(props) {
  var currentForm = props.currentForm,
      onUpdate = props.onUpdate,
      formState = props.formState,
      setFormState = props.setFormState;
  var classes = useStyles$8();

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      createLoginValid = _React$useState2[0],
      setCreateLoginValid = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      createCompanyValid = _React$useState4[0],
      setCreateCompanyValid = _React$useState4[1];

  React.useEffect(function () {
    if (onUpdate) onUpdate(createLoginValid, createCompanyValid);
  }, [createLoginValid, createCompanyValid, onUpdate]);
  return React.createElement("div", {
    className: classes.formsContainer
  }, React.createElement(CreateLogin, {
    open: currentForm === "CreateLogin",
    onUpdate: function onUpdate(valid) {
      return setCreateLoginValid(valid);
    },
    setFormState: setFormState,
    formState: formState
  }), React.createElement(CreateCompany, {
    open: currentForm === "CreateCompany",
    onUpdate: function onUpdate(valid) {
      return setCreateCompanyValid(valid);
    },
    setFormState: setFormState,
    formState: formState
  }));
};

var SignUpForm = function SignUpForm(props) {
  var onSignUp = props.onSignUp;

  var _React$useState = React.useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    companyName: "",
    website: "",
    phoneNumber: ""
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      formState = _React$useState2[0],
      setFormState = _React$useState2[1];

  var _React$useState3 = React.useState("CreateLogin"),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      currentForm = _React$useState4[0],
      setCurrentForm = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      createLoginValid = _React$useState6[0],
      setCreateLoginValid = _React$useState6[1];

  var _React$useState7 = React.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      createCompanyValid = _React$useState8[0],
      setCreateCompanyValid = _React$useState8[1];

  return React.createElement(SignUpFlexArea, null, React.createElement(SignUpFormContainer, null, React.createElement(SignUpFormTitle, null), React.createElement(Forms, {
    formState: formState,
    currentForm: currentForm,
    onUpdate: function onUpdate(createLoginValid, createCompanyValid) {
      setCreateLoginValid(createLoginValid);
      setCreateCompanyValid(createCompanyValid);
    },
    setFormState: setFormState
  }), React.createElement(FormControls, {
    currentForm: currentForm,
    nextDisabled: !createLoginValid,
    signUpDisabled: !createCompanyValid,
    onNextClick: function onNextClick(forwardForm) {
      return setCurrentForm(forwardForm);
    },
    onSignUpClick: function onSignUpClick() {
      return onSignUp(formState);
    },
    onBack: function onBack(backForm) {
      return setCurrentForm(backForm);
    }
  })));
};

var useStyles$9 = MUI.makeStyles(function (theme) {
  return {
    signUpHeader: {
      width: "100%",
      padding: "1em"
    }
  };
});

var SignUpHeader = function SignUpHeader(props) {
  var classes = useStyles$9();
  var children = props.children;
  return React.createElement("div", {
    className: classes.signUpHeader
  }, children);
};

var useStyles$a = MUI.makeStyles(function (theme) {
  return {
    signUpBackButtonView: {
      border: "1px solid ".concat(theme.palette.primary.main)
    }
  };
});

var SignUpBackButtonView = function SignUpBackButtonView(props) {
  var onClick = props.onClick;
  var classes = useStyles$a();
  return React.createElement(MUI.IconButton, {
    "data-testid": "back-button",
    onClick: onClick,
    className: classes.signUpBackButtonView,
    color: "primary"
  }, React.createElement(MUIIcons.ChevronLeft, null));
};

var SignUpBackButton = function SignUpBackButton(props) {
  return React.createElement(SignUpBackButtonView, props);
};

var SignUp = function SignUp(props) {
  var onBackClick = props.onBackClick,
      onSignUp = props.onSignUp;
  return React.createElement(React.Fragment, null, React.createElement(SignUpHeader, null, React.createElement(SignUpBackButton, {
    onClick: onBackClick
  })), React.createElement(SignUpContainer, null, React.createElement(Branding, null), React.createElement(SignUpForm, {
    onSignUp: onSignUp
  })));
};

SignUp.propTypes = {
  onBackClick: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired
};

module.exports = SignUp;
