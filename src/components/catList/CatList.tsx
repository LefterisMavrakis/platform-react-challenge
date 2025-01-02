import Typography from "@mui/material/Typography";
import { Image } from "../../api/types";
import Flex from "../shared/styledFlex";
import { AppButton } from "../shared/styledCommon";

type CatListProps = {
  listData: Image[];
  isLoading: boolean;
  onLoadMore?: () => void;
};

const CatList = ({ listData, isLoading, onLoadMore }: CatListProps) => {
  console.log(listData);

  return (
    <Flex
      $flexDirection="column"
      $alignItems="center"
      $spacingSize="32px"
      $fullwidth
    >
      <Flex $flexDirection="column" $spacingSize="24px">
        <Typography variant="h5">Cats list</Typography>

        <Flex $spacingSize="12px" $wrap>
          {listData.map((item) => {
            return (
              <Flex key={item.id}>
                <img src={item.url} width="100px" alt="" />
              </Flex>
            );
          })}
        </Flex>
      </Flex>

      <AppButton variant="contained" onClick={onLoadMore} disabled={isLoading}>
        {isLoading ? "Loading" : "Load more"}
      </AppButton>
    </Flex>
  );
};

export default CatList;
