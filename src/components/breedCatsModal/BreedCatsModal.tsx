import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Dialog from "@mui/material/Dialog";
import Skeleton from "@mui/material/Skeleton";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import theCatAPI from "../../api/api";
import { ApiBreed, Image } from "../../api/types";
import Flex from "../shared/styledFlex";
import { GridContainer } from "../shared/styledCommon";
import CatItem from "../catItem/CatItem";

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

const BreedCatsModal = () => {
  const { breedId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [listData, setListData] = useState<Image[]>([]);

  const navigate = useNavigate();

  const closeModal = () => {
    navigate("/breeds");
  };

  useEffect(() => {
    setIsLoading(true);

    theCatAPI.images
      .searchImages({
        limit: 20,
        breeds: [breedId as ApiBreed],
      })
      .then((images) => {
        setListData(images);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [breedId]);

  return (
    <BootstrapDialog
      onClose={closeModal}
      aria-labelledby="customized-dialog-title"
      open={!!breedId}
    >
      <DialogTitle
        sx={{ m: 0, p: 2, paddingRight: 7 }}
        id="customized-dialog-title"
      >
        Breed cats
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
        {!isLoading ? (
          <Flex $flexDirection="column" $spacingSize="24px" data-testid="breed-cats-modal-content">
            <GridContainer>
              {listData.map((item) => {
                return (
                  <CatItem itemData={item} key={item.id} canToggleFavourite />
                );
              })}
            </GridContainer>
          </Flex>
        ) : (
          <GridContainer data-testid="breed-cats-skeleton">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton
                key={index}
                animation={"wave"}
                height={280}
                style={{ borderRadius: "40px", transform: "unset" }}
              />
            ))}
          </GridContainer>
        )}
      </DialogContent>
    </BootstrapDialog>
  );
};

export default BreedCatsModal;
