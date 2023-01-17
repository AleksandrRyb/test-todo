import { extendTheme } from "@chakra-ui/react";

const activeLabelStyles = {
  transform: "scale(0.8) translateY(-24px)",
};

export const formTheme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
              color: "gray.400",
            },
          },
        },
      },
    },
  },
  colors: {
    blue: {
      100: "#366EFF",
      200: "#4879f7",
    },
    textColor: {
      white: "#F4F4F4",
    },
    gray: {
      100: "#222222",
    },
  },
  fonts: {
    body: `"Abhaya Libre", serif`,
    heading: `"Abhaya Libre", serif`,
  },
});
