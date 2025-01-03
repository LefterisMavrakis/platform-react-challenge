import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate, useParams } from "react-router";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import EastIcon from "@mui/icons-material/East";
import theCatAPI from "../../api/api";
import { Image } from "../../api/types";
import { CardHeroImage } from "./styledComponents";
import Flex from "../shared/styledFlex";
import Typography from "@mui/material/Typography";
import { AppButton } from "../shared/styledCommon";

const BootstrapDialog = styled(Dialog)(() => ({
  "& .MuiPaper-root": {
    maxHeight: "80vh",
    height: "100%",
    borderRadius: "40px",
    minWidth: "320px",
    maxWidth: "unset",
  },
  "& .MuiDialogContent-root": {
    padding: "24px 40px",
    borderBottom: "none",
  },
  "& .MuiDialogTitle-root": {
    fontWeight: "800",
    padding: "32px 40px 25px 40px",
  },
  "@media (max-width: 767px)": {
    "& .MuiDialogTitle-root": {
      fontWeight: "800",
      padding: "20px 50px 20px 20px",
    },
    "& .MuiDialogContent-root": {
      padding: "20px",
      borderBottom: "none",
    },
    "& .MuiIconButton-root": {
      top: 18,
      right: 10,
    },
  },
}));

const CatModal = () => {
  const { catId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [catData, setCatData] = useState<Image | null>(null);

  const { breeds, url, width, height } = catData || {};

  const navigate = useNavigate();

  const closeModal = () => {
    navigate("/cats");
  };

  useEffect(() => {
    setIsLoading(true);

    theCatAPI.images
      .getImage(catId!)
      .then((image) => {
        setCatData(image);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [catId]);

  return (
    <BootstrapDialog
      onClose={closeModal}
      aria-labelledby="customized-dialog-title"
      open={!!catId}
    >
      <DialogTitle
        sx={{ m: 0, p: 2, paddingRight: 7 }}
        id="customized-dialog-title"
      >
        Cat details
      </DialogTitle>

      <IconButton
        aria-label="close"
        onClick={closeModal}
        sx={(theme) => ({
          position: "absolute",
          right: 30,
          top: 30,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent dividers>
        {isLoading ? (
          <span>Loading data</span>
        ) : (
          <Flex $flexDirection="column" $spacingSize="24px">
            <CardHeroImage
              $image={url!}
              $width={width!}
              $height={height!}
            ></CardHeroImage>

            <Flex $flexDirection="column" $spacingSize="16px">
              <Typography variant="subtitle1">Breeds</Typography>

              {breeds?.length ? (
                <>
                  <Typography key={breeds[0].id}>{breeds[0].name}</Typography>
                </>
              ) : (
                <Typography variant="body1">No breed found</Typography>
              )}
              <NavLink to="/breeds">
                <AppButton variant="contained" data-testid="shipments-button">
                  <Flex $spacingSize="8px" $alignItems="center">
                    <Typography variant="body2" style={{ fontWeight: "700" }}>
                      Explore breeds
                    </Typography>
                    <EastIcon />
                  </Flex>
                </AppButton>
              </NavLink>
            </Flex>
          </Flex>
        )}
      </DialogContent>
    </BootstrapDialog>
  );
};

export default CatModal;