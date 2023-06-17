import { useState } from "react";
import {
    createStyles,
    Table,
    ScrollArea,
    UnstyledButton,
    Group,
    Text,
    Center,
    TextInput,
    rem,
} from "@mantine/core";
import { keys } from "@mantine/utils";
import {
    IconSelector,
    IconChevronDown,
    IconChevronUp,
    IconSearch,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
    th: {
        padding: "0 !important",
    },

    control: {
        width: "100%",
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
        },
    },

    icon: {
        width: rem(21),
        height: rem(21),
        borderRadius: rem(21),
    },
}));

const Th = ({ children, reversed, sorted, onSort }) => {
    const { classes } = useStyles();
    const Icon = sorted
        ? reversed
            ? IconChevronUp
            : IconChevronDown
        : IconSelector;
    return (
        <th className={classes.th}>
            <UnstyledButton onClick={onSort} className={classes.control}>
                <Group position="apart">
                    <Text fw={500} fz="sm">
                        {children}
                    </Text>
                    <Center className={classes.icon}>
                        <Icon size="19" stroke={1.5} />
                    </Center>
                </Group>
            </UnstyledButton>
        </th>
    );
};

const filterData = (data, search) => {
    const query = search.toLowerCase().trim();
    console.log(keys(data[0]));
    return data.filter((item) =>
        keys(data[0]).some((key) => {
            const value = item[key];
            console.log();
            if (typeof value == "string") {
                return item[key].toLowerCase().includes(query);
            } else {
                return item[key].toString().includes(query);
            }
        })
    );
};

const sortData = (data, payload) => {
    const { sortBy } = payload;

    const sortByNormalized = sortBy.toLowerCase();

    console.log(sortByNormalized);
    if (!sortBy) {
        return filterData(data, payload.search);
    }

    if (sortByNormalized == "amount") {
        return filterData(
            [...data].sort((a, b) => {
                if (payload.reversed) {
                    return b[sortByNormalized] - a[sortByNormalized];
                }

                return a[sortByNormalized] - b[sortByNormalized];
            }),
            payload.search
        );
    }

    if (sortByNormalized == "date") {
        return filterData(
            [...data].sort((a, b) => {
                const dateA = new Date(a[sortByNormalized]);
                const dateB = new Date(b[sortByNormalized]);
                if (payload.reversed) {
                    return dateB - dateA;
                }

                return dateA - dateB;
            }),
            payload.search
        );
    }

    return filterData(
        [...data].sort((a, b) => {
            if (payload.reversed) {
                return b[sortByNormalized].localeCompare(a[sortByNormalized]);
            }

            return a[sortByNormalized].localeCompare(b[sortByNormalized]);
        }),
        payload.search
    );
};

const DataGrid = ({ tableHeader, tableFields, data }) => {
    const [search, setSearch] = useState("");
    const [sortedData, setSortedData] = useState(data);
    const [sortBy, setSortBy] = useState(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);

    const setSorting = (field) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedData(sortData(data, { sortBy: field, reversed, search }));
    };

    const handleSearchChange = (event) => {
        const { value } = event.currentTarget;
        setSearch(value);
        setSortedData(
            sortData(data, {
                sortBy,
                reversed: reverseSortDirection,
                search: value,
            })
        );
    };

    const rows = sortedData.map((row) => (
        <tr key={row["transaction_id"]}>
            {tableFields.map((field, index) => {
                let fieldValue = row[field];
                if (field == "created_at") {
                    const created_date = new Date(fieldValue);
                    const options = {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    };
                    const formattedDate = created_date.toLocaleDateString(
                        undefined,
                        options
                    );
                    return (
                        <td key={row["transaction_id"] + index}>
                            {formattedDate}
                        </td>
                    );
                } else {
                    return (
                        <td key={row["transaction_id"] + index}>
                            {fieldValue}
                        </td>
                    );
                }
            })}
        </tr>
    ));

    const headerRow = tableHeader.map((header) => (
        <Th
            sorted={sortBy === header}
            reversed={reverseSortDirection}
            onSort={() => setSorting(header)}
        >
            {header}
        </Th>
    ));

    return data.length > 0 || data == undefined ? (
        <ScrollArea>
            <TextInput
                placeholder="Search by any field"
                mb="md"
                icon={<IconSearch size="19" stroke={1.5} />}
                value={search}
                onChange={handleSearchChange}
            />
            <Table
                horizontalSpacing="md"
                verticalSpacing="xs"
                miw={700}
                sx={{ tableLayout: "fixed" }}
            >
                <thead>
                    <tr>{headerRow}</tr>
                </thead>
                <tbody>
                    {rows.length > 0 ? (
                        rows
                    ) : (
                        <tr>
                            <td colSpan={Object.keys(data[0]).length}>
                                <Text weight={500} align="center">
                                    Nothing found
                                </Text>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </ScrollArea>
    ) : (
        <div className=" flex justify-center text-xl">
            No transactions were found
        </div>
    );
};

export default DataGrid;
