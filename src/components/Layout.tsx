
import { Container } from "semantic-ui-react";
import Navbar from "./Navbar";

export default function Layout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div>
      <Navbar />
      <main style={{ background: "#2e2e2d" }}>
        <Container style={{ paddingTop: "2rem", height: "90vh" }}>
          {children}
        </Container>
      </main>
    </div>
  );
}
