import {
  DocumentNode,
  QueryHookOptions,
  useMutation,
  useQuery,
} from "@apollo/client";
import { useMemo } from "react";
import { Lift, LiftStatus } from "../types/generated/graphqlScheme.ts";
import { UPDATE_LIFT_BY_ID } from "../queries/updateLiftByIf.ts";
import { GET_ALL_LIFTS } from "../queries/getAllLifts.ts";

interface useLiftsProps {
  query?: DocumentNode;
  options?: QueryHookOptions;
  filter?: string;
}

const useLifts = ({
  query = GET_ALL_LIFTS,
  options = {},
  filter,
}: useLiftsProps) => {
  const { data, loading, error } = useQuery(query, options);

  const [
    updateStatus,
    { data: mutatedData, loading: mutateLoading, error: mutateError },
  ] = useMutation<object, { id: string; status: LiftStatus }>(
    UPDATE_LIFT_BY_ID,
  );

  const filtered = useMemo(() => {
    return filter === "ALL"
      ? data?.allLifts
      : data?.allLifts?.filter(({ status }: Lift) => status === filter);
  }, [filter, data]);

  return {
    data,
    loading,
    error,
    filtered,
    updateStatus,
    mutatedData,
    mutateLoading,
    mutateError,
  };
};

export default useLifts;
