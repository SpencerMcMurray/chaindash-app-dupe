import { render, screen } from '@testing-library/react'
import PDFViewer from '../components/PDF'

describe("Sidebar", () => {
  it('renders correctly', async () => {
    render(
      <PDFViewer file="" />
    )
    expect(screen.getByTestId("pdf")).toBeInTheDocument()
  })
})