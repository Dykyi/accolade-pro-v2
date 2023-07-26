import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { ReactNode, useCallback } from "react";
import { LiftStatus } from "../../types/generated/graphqlScheme.ts";
import useLifts from "../../hooks/useLifts.ts";
import styles from "./ListForm.module.scss";

interface LiftFormProps {
  lift: string;
  defaultStatus: string | undefined | null;
  onClose: () => void;
  renderTrialAccess: ReactNode;
}

const LiftForm = ({
  onClose,
  lift,
  defaultStatus,
  renderTrialAccess,
}: LiftFormProps) => {
  const statusOptions = ["OPEN", "CLOSED", "HOLD"] as const;
  const { updateStatus } = useLifts({});

  const defaultValues = {
    status: {
      label: defaultStatus,
      value: defaultStatus,
    },
  };

  const { handleSubmit, control, watch } = useForm({
    defaultValues,
  });

  const status = watch("status").value as LiftStatus;
  const options = statusOptions.map((status) => ({
    value: status,
    label: status.charAt(0) + status.slice(1).toLowerCase(),
  }));

  const onSubmit = useCallback(() => {
    updateStatus({
      variables: { id: lift, status: status },
    });
    onClose();
  }, [status, lift, updateStatus, onClose]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.selectWrapper}>
        <Controller
          name="status"
          control={control}
          defaultValue={defaultValues.status}
          render={({ field }) => (
            <Select
              {...field}
              placeholder="Select a status"
              defaultValue={defaultValues.status}
              options={options}
              isMulti={false}
            />
          )}
        />
      </div>
      {renderTrialAccess && renderTrialAccess}
      <div className={styles.buttonWrapper}>
        <button
          type="button"
          className={`${styles.closeButton} ${styles.button}`}
          onClick={onClose}
        >
          Close
        </button>
        <button
          type="submit"
          className={`${styles.submitButton} ${styles.button}`}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default LiftForm;
