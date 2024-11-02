import { createApi } from "unsplash-js";
import React, { useEffect, useState, Fragment, useCallback } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CaustomizedCard from "./components/CaustomizedCard";
import SearchAppBar from "./components/NavBar/index";
import LoadingSkeleton from "./components/LoadingSkeleton";
import { Pagination } from "@mui/material";

const api = createApi({
  accessKey: "b61453a0f6938c616e0ca5bd5a0ae0f9ab352ae89cde94c33564520866614c6c",
  secret: "bf23f97050886e0a7e47c84f1dfdcd4ddf68b45ffee1957a90d395d2086889ce",
});

function App() {
  const [data, setPhotoResponse] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const handlePageChange = (e, pageNum) => {
    setPageNumber(pageNum);
  };

  const fetchData = useCallback(
    (pageNum, searchValue) => {
      setLoading(true);
      api.search
        .getPhotos({
          query: searchValue || "random",
          orientation: "landscape",
          perPage: 20,
          page: pageNumber,
        })
        .then((result) => {
          setPhotoResponse(result);
          setLoading(false);
        })
        .catch(() => {
          console.log("something went wrong!");
          setLoading(false);
        });
      window.scroll(0, 0);
    },
    [pageNumber]
  );

  const handleSearch = () => {
    setPageNumber(0);
    fetchData(0, searchValue);
  };

  useEffect(() => {
    fetchData(pageNumber, searchValue);
  }, [fetchData]);

  return (
    <Fragment>
      <CssBaseline />
      <Container
        //linear-gradient(89deg,#868b89,#373539)
        sx={{ background: "#f8f7f5" }}
        maxWidth="xl"
      >
        <Box sx={{ minHeight: "100vh", paddingBottom: 5 }}>
          <SearchAppBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleSearch={handleSearch}
          />
          {loading ? (
            <LoadingSkeleton />
          ) : (
            <Box
              flex={4}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"start"}
              flexWrap={"wrap"}
              flexDirection={"row"}
            >
              {data.response.results.map((item) => (
                <CaustomizedCard key={item.id} {...item} />
              ))}
            </Box>
          )}
          <Box
            flex={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"start"}
            flexWrap={"wrap"}
            flexDirection={"row"}
          >
            {data?.response?.total_pages > 1 && (
              <Pagination
                count={data?.response?.total_pages}
                color="secondary"
                onChange={handlePageChange}
                page={pageNumber}
                defaultValue={pageNumber}
              />
            )}
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
}

export default App;
