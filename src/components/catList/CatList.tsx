import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { Image } from "../../api/types";
import Flex from "../shared/styledFlex";
import { AppButton } from "../shared/styledCommon";
import CatItem from "../catItem/CatItem";
import { GridContainer } from "../shared/styledCommon";

type CatListProps = {
  listData: Image[];
  isLoading: boolean;
  onLoadMore?: () => void;
};

const CatList = ({ listData, isLoading, onLoadMore }: CatListProps) => {
  return (
    <Flex
      $flexDirection="column"
      $alignItems="center"
      $spacingSize="32px"
      $fullwidth
    >
      <Flex $flexDirection="column" $spacingSize="24px" $fullwidth>
        <Typography variant="h5">Cats list</Typography>

        <GridContainer>
          {listData.map((item) => {
            return <CatItem itemData={item} key={item.id} />;
          })}

          {isLoading && (
            <>
              {Array.from({ length: 10 }).map((_, index) => (
                <Skeleton
                  key={index}
                  animation={"wave"}
                  height={470}
                  style={{ borderRadius: "40px", transform: "unset" }}
                />
              ))}
            </>
          )}
        </GridContainer>
      </Flex>

      <AppButton variant="contained" onClick={onLoadMore} disabled={isLoading}>
        {isLoading ? "Loading" : "Load more"}
      </AppButton>
    </Flex>
  );
};

export default CatList;
