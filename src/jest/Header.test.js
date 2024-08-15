import { render, screen } from "@testing-library/react";
import Header from "@/components/Header"; // Adjust the path accordingly
import { useSession } from "next-auth/react";

jest.mock("next-auth/react");

describe("Header", () => {
  it("renders the Chatter logo", () => {
    useSession.mockReturnValueOnce({ data: null, status: "unauthenticated" });
    render(<Header />);

    expect(screen.getByText("Chatter")).toBeInTheDocument();
  });

  it("displays the login button when the user is not authenticated", () => {
    useSession.mockReturnValueOnce({ data: null, status: "unauthenticated" });
    render(<Header />);

    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("displays the create button when the user is authenticated", () => {
    useSession.mockReturnValueOnce({
      data: { user: { name: "John Doe", email: "john@example.com" } },
      status: "authenticated",
    });
    render(<Header />);

    expect(screen.getByText("Create")).toBeInTheDocument();
  });
});
