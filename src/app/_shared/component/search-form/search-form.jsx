"use client";

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";

export default function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push(`/products/search?query=${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon></SearchIcon>
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Tìm kiếm sản phẩm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </InputGroup>
    </form>
  );
}
